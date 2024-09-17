import './error.css';

/** @type {import('next').Metadata} */
export const metadata = {
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
