"use client";

import './error.css';

export default function GlobalError({ error, reset }) {
    return (
        <html lang="en">
            <body>
                <h1>500</h1>
                <p>An Unexpected Error has Occured. Please try again</p>
                <a onClick={() => reset()}>Return</a>
            </body>
        </html>
    );
}
