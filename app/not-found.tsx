import './error.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: '404 Not Found',
    },
};

export default function NotFound() {
    return (
        <body>
            <h1>404</h1>
            <p>Page not found. Please check back later</p>
        </body>
    );
}
