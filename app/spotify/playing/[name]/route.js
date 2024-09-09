import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation'
import * as Supabase from '@supabase/supabase-js';
import SpotifyWebAPI from 'spotify-web-api-node';

const SpotifyAPI = new SpotifyWebAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

const supabase = Supabase.createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export async function GET(request, { params }) {
    const { name: user } = params;
    const { data: userRows, error: userError } = await supabase.from('spotify').select('*');
    if (userError || !userRows) return notFound();
    const spotifyUser = userRows.find(row => row.user === user);
    if (!spotifyUser) return NextResponse.error();
    const { access, refresh } = spotifyUser;
    SpotifyAPI.setAccessToken(access);
    SpotifyAPI.setRefreshToken(refresh);
    const { body: { access_token: newAccess, refresh_token: newRefresh } } = await SpotifyAPI.refreshAccessToken();
    SpotifyAPI.setAccessToken(newAccess);
    SpotifyAPI.setRefreshToken(newRefresh);
    await supabase.from('spotify').update({ access: newAccess, refresh: newRefresh}).eq('user', user);
    const res = {
        next: null,
    };
    const MainSpotifyRes = await SpotifyAPI.getMyCurrentPlaybackState({ market: 'US' })
        .catch(() => res.next = NextResponse.json({
            isPlaying: false,
            playing: {
                track: {
                    title: 'Nothing playing',
                    url: null,
                },
                album: {
                    title: 'Nothing playing',
                    artists: [],
                    image: null,
                },
                artists: [],
                meta: {
                    progress: {
                        start: 0,
                        end: 0,
                        current: 0,
                        percentage: 0,
                    },
                },
            },
        }));
    if (res.next) return res.next;
    const { body } = MainSpotifyRes;
    if (!new Object(body).hasOwnProperty('item')) return NextResponse.json({
        isPlaying: false,
        playing: {
            track: {
                title: 'Nothing playing',
                url: null,
            },
            album: {
                title: 'Nothing playing',
                artists: [],
                image: null,
            },
            artists: [],
            meta: {
                progress: {
                    start: 0,
                    end: 0,
                    current: 0,
                    percentage: 0,
                },
            },
        },
    });
    /** @type {SpotifyAPI.TrackObjectFull} */
    const item = body.item;
    const { name, album, artists, external_urls: externalURLs } = item;
    const data = {
        track: {
            title: name,
            url: externalURLs.spotify,
        },
        album: {
            title: album.name,
            artists: [],
            image: album.images.find(sDat => sDat.width === 64e1).url || 'https://via.placeholder.com/64',
        },
        artists: [],
        meta: {
            progress: {
                start: Date.now() - body.progress_ms,
                end: Date.now() + (body.item.duration_ms - body.progress_ms),
                current: body.progress_ms,
                percentage: (body.progress_ms / body.item.duration_ms) * 1e2,
            },
        },
    };
    for (const artist of artists) {
        data.artists.push(
            await SpotifyAPI.getArtist(artist.id)
                .then(
                    dat => ({
                        name: dat.body.name,
                        image: dat.body.images.find(({ width }) => width === 64e1)?.url || 'https://via.placeholder.com/64',
                        url: dat.body.external_urls.spotify,
                    }),
                    () => ({
                        name: artist.name,
                        image: 'https://via.placeholder.com/64',
                        url: 'https://open.spotify.com',
                    }),
                ),
        );
    }
    for (const albumArtist of album.artists) {
        data.album.artists.push(
            await SpotifyAPI.getArtist(albumArtist.id)
                .then(
                    dat => ({
                        name: dat.body.name,
                        image: dat.body.images.find(({ width }) => width === 64e1)?.url || 'https://via.placeholder.com/64',
                        url: dat.body.external_urls.spotify,
                    }),
                    () => ({
                        name: albumArtist.name,
                        image: 'https://via.placeholder.com/64',
                        url: 'https://open.spotify.com',
                    }),
                ),
        );
    }
    return NextResponse.json({
        isPlaying: true,
        playing: data,
    });
}
