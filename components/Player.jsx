/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 14,
    borderRadius: 7,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 7,
        backgroundColor: theme.palette.mode === 'light' ? '#1aff90' : '#30e88f',
    },
}));

import Timestamp from '#/components/Timestamp';

class Spotify {
    constructor() {
        this.playing = false;
        this.song = {
            track: {
                title: 'Nothing playing',
                url: null,
            },
            album: {
                title: 'Nothing playing',
                /** @type {Array<{name: string, image: string, url: string}>} */
                artists: [],
                image: null,
            },
            /** @type {Array<{name: string, image: string, url: string}>} */
            artists: [],
            meta: {
                progress: {
                    start: 0,
                    end: 0,
                    current: 0,
                    percentage: 0,
                },
            },
        };
    }
    setPlaying = playing => Object.assign(this, { playing });
    setTrack = song => Object.assign(this, { song });
}

export default function Player({ user }) {
    const [playing, setPlaying] = useState({
        track: { title: "Nothing playing", url: null },
        album: { title: "Nothing", artists: [], image: "https://via.placeholder.com/300" },
        artists: [{ name: "No One", image: "https://via.placeholder.com/300", url: "https://open.spotify.com/artist/0" }],
        meta: { progress: { start: 0, end: 0, current: 0, percentage: 0 } },
    });

    useEffect(() => {
        const load = async () => {
            const data = await fetch(`/spotify/${user}/playing/`);
            const { isPlaying, playing: track } = await data.json();
            const spotify = new Spotify();
            spotify.setPlaying(isPlaying);
            spotify.setTrack(track);
            if (!isPlaying) return;
            setPlaying(spotify.song);
        };
        load();
        const interval = setInterval(load, 25e2);
        return () => clearInterval(interval);
    });

    const LF = new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' });
    const NFR = / *\(.*(ft|feat|with).*\)/gmi;

    return (
        <div
            className="bg-[#00000070] backdrop-blur-xl rounded-[2rem] shadow-lg p-8 w-full max-w-xl now-playing flex gap-8 md:max-w-6xl"
        >
            <style>
                {`.album-cover::before {background-image:url(${playing.album.image || 'https://via.placeholder.com/300'});}`}
            </style>
            <div className="album-cover">
                <img
                    className="rounded-lg w-full object-cover"
                    id="album-cover"
                    src={playing.album.image || 'https://via.placeholder.com/300'}
                    alt={playing.album.title.replace(NFR, '') || 'None'}
                />
            </div>
            <div className="song-info p-4 self-center gap-2 grid">
                <div className="text-center md:text-left gap-2 grid">
                    <h2
                        className="text-gray-300 text-3xl font-semibold"
                        id="song-title"
                    >
                        {playing.track.title.replace(NFR, '') || 'Nothing'}
                    </h2>
                    <p
                        className="text-2xl font-semibold text-slate-200"
                        id="artist-name"
                    >
                        {LF.format(playing.artists.map(art => art.name || 'None')).replace(NFR, '') || 'No One'}
                    </p>
                </div>
                <div className="my-3 grid">
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ minWidth: 35 }}>
                            <Timestamp time={playing.meta.progress.current} />
                        </Box>
                        <Box sx={{ width: '100%', mx: 2 }}>
                            <BorderLinearProgress variant="determinate" value={playing.meta.progress.percentage} />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            <Timestamp time={playing.meta.progress.end - playing.meta.progress.start} />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}
