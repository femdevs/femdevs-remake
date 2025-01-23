import { BaseReactProps } from "lib/m/types";

export default function SecuritySupport({ ver, supported, type }: BaseReactProps<{ ver: string, supported: boolean, type: number }>) {
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
