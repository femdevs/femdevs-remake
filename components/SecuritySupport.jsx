export default function SecuritySupport({ ver, supported, type }) {
    const Types = ['>', '>=', '<', '<=', '^', '~'];
    const ftype = Types[type] || '';
    const fsupported = supported ? '✅' : '❌';
    return (
        <tr>
            <td className="select-none font-poppins text-lg text-neutral-900">{ftype}{ver}</td>
            <td className="select-none font-poppins text-lg text-neutral-900">{fsupported}</td>
        </tr>
    );
}
