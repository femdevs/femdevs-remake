export default function ServicesAbout({ title, description }) {
    return (
        <>
            <h2 className="select-none font-poppins text-2xl font-medium text-neutral-900">{title}</h2>
            <h3 className="select-none font-poppins text-lg text-neutral-700">{description}</h3>
        </>
    );
}
