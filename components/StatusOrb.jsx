import UptimeClient from "#/src/uptime";

export default async function StatusOrb({ translations }) {
    const uptimeClient = new UptimeClient(process.env.BETTER_STACK_TOKEN);
    const uptimeData = await uptimeClient.status();
    const States = [
        ["bg-green-500", translations.type.up],
        ["bg-red-500", translations.type.down],
        ["bg-yellow-500", translations.type.degraded],
        ["bg-blue-500", translations.type.maintenance],
    ];
    const msg = States[uptimeData.agrStatus - 1];
    const base = `flex rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${msg[0]}`;
    return (
        <span className={`relative ${base}`} title={translations.prefix + msg[1]}>
            <span className={`absolute animate-ping ${base}`}></span>
        </span>
    );
}
