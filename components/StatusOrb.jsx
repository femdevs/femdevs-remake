export default function StatusOrb({ state, translations }) {

    const States = [
        ["bg-green-500", translations.type.up],
        ["bg-red-500", translations.type.down],
        ["bg-yellow-500", translations.type.degraded],
        ["bg-blue-500", translations.type.maintenance],
        ["bg-gray-500", translations.type.unknown],
    ];
    const message = States[state - 1] || ["bg-gray-500", translations.type.unknown];
    return (
        <span
            className={`relative flex rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${message[0]}`}
            title={translations.prefix + message[1]}
        >
            <span
                className={`absolute flex animate-ping rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${message[0]}`}
            ></span>
        </span>
    );
}
