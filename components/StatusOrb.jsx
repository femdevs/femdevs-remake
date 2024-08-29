export default function StatusOrb({ state }) {
    const States = [
        ["bg-green-500", "Online"],
        ["bg-red-500", "Offline"],
        ["bg-yellow-500", "Degraded"],
        ["bg-blue-500", "Under Maintenance"],
        ["bg-gray-500", "Unknown"],
    ];
    const message = States[state - 1] || ["gray", "Unknown"];
    return (
        <span
            className={`relative flex rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${message[0]}`}
            title={`Service Status: ${message[1]}`}
        >
            <span
                className={`absolute flex animate-ping rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${message[0]}`}
            ></span>
        </span>
    );
}
