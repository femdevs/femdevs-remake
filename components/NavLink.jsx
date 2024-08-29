// a.select-none.font-poppins.text-lg.transition-all(class='hover:text-neutral-800' href=href)&attributes(attributes)= text

export default function NavLink({ href, text, extraAttributes }) {
    return (
        <a
            className="select-none font-poppins text-lg transition-all hover:text-neutral-800 text-slate-600"
            href={href}
            {...extraAttributes}
        >{text}</a>
    );
}
