export default function OSSEnforcement({ section, impact, consequence }) {
    return (
        <>
            <h3 className="select-none font-poppins text-2xl font-bold text-neutral-900">{section}</h3>
            <p className="select-none font-poppins text-xl text-neutral-900">
                <div className="font-semibold underline">Impact: </div>
                {impact}
            </p>
            <p className="select-none font-poppins text-xl text-neutral-900">
                <div className="font-semibold underline">Consequence: </div>
                {consequence}
            </p>
        </>
    );
}
