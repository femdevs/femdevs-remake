export default function FooterLink({ href, text, extraAttributes }) {
    return (
        // a.select-none.font-poppins.text-lg.text-neutral-100.transition-all(class='hover:text-neutral-300' href=href)&attributes(attributes)= text
        <a
            className="select-none font-poppins text-lg text-neutral-100 transition-all hover:text-neutral-300"
            href={href}
            {...extraAttributes}
        >{text}</a>
    );
}
