export default function ServicesAbout({ sectionA, sectionB }) {
    return (
        <>
            <h2 className="select-none font-poppins text-3xl font-medium text-neutral-900">{sectionA}</h2>
            <p className="select-none font-poppins text-xl text-neutral-700">{sectionB}</p>
        </>
    );
}
