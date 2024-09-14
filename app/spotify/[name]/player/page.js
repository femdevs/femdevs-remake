import Player from "#/components/Player";

import "#/assets/css/player.css";

export default async function Page({ params }) {
    return (
        <body>
            <div id="bg" className="x-0 y-0 flex">
            </div>
            <div className="flex items-center justify-center min-h-screen">
                <Player
                    user={params.name}
                />
            </div>
        </body>
    );
}
