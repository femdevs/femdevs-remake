import * as Supabase from '@supabase/supabase-js';

export function Title({ children }) {
    return (
        <h2 className="select-none font-poppins text-3xl font-bold text-neutral-900">
            {children}
        </h2>
    );
}

export function Description({ children }) {
    return (
        <p className="select-none font-poppins text-xl text-neutral-900">
            {children}
        </p>
    );
}

export function Link({ text, href }) {
    return (
        <a className="font-bold text-cyan-700" href={href} target="_blank">{text}</a>
    );
}

export default async function Page() {
    const supabase = Supabase.createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );
    const { data } = await supabase.from("contributors").select("*");
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-bold text-neutral-900">Contributors</h1>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Title>The following people have contributed to the website</Title>
                        {data.map(contrib => (
                            <Description key={Math.round(Math.random() * 1e9)}>
                                <Link href={`https://github.com/${contrib.github}`} text={contrib.name} /> - {contrib.description}
                            </Description>
                        ))}
                    </div>
                </div>
            </hero>
        </content>
    );
}
