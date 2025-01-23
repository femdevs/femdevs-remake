import { BaseReactProps } from "lib/m/types";

export default function NavLink({ href, text, extraAttributes }: BaseReactProps<{ href: string, text: string, extraAttributes?: any }>) {
    return (
        <a
            className="select-none font-poppins text-lg transition-all hover:text-neutral-800 text-slate-800"
            href={href}
            {...extraAttributes}
        >{text}</a>
    );
}
