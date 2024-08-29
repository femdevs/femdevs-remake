/*
each arg in args
	.flex.flex-col.items-center.space-y-2
		h2.select-none.font-poppins.text-3xl.font-bold.text-neutral-900= arg[0]
		h3.select-none.font-poppins.text-xl.text-neutral-900= arg[1]
*/

export default function LowerFooter({ args }) {
    const Mapper = arg => (
        <div className="flex flex-col items-center space-y-2">
            <h2 className="select-none font-poppins text-3xl font-bold text-neutral-900">{arg[0]}</h2>
            <h3 className="select-none font-poppins text-xl text-neutral-900">{arg[1]}</h3>
        </div>
    );
    return (
        <>
            {args.map(Mapper)}
        </>
    );
}
