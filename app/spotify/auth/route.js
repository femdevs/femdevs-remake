import { NextResponse } from 'next/server';
import SpotifyWebAPI from 'spotify-web-api-node';

const SpotifyAPI = new SpotifyWebAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});
const scopes = ["user-read-private", "user-read-currently-playing", "user-read-playback-state", "user-read-email"];
const authorizeURL = SpotifyAPI.createAuthorizeURL(scopes);

/** @param {import('next/server').NextRequest} request */
export async function GET(request) {
    return (request.nextUrl.searchParams.get('code'))
        ? NextResponse.json((await SpotifyAPI.authorizationCodeGrant(request.nextUrl.searchParams.get('code'))).body)
        : NextResponse.redirect(authorizeURL);
}
