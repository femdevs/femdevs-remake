import { BaseReactProps } from "lib/m/types";

function Header({ children }: BaseReactProps) {
    return (
        <h2 className="select-none font-poppins text-3xl font-bold text-neutral-900">
            {children}
        </h2>
    );
}

function Description({ children }: BaseReactProps) {
    return (
        <p className="select-none font-poppins text-xl text-neutral-900">
            {children}
        </p>
    );
}

function Link({ text, href }: BaseReactProps<{ text: string, href: string }>) {
    return (
        <a className="font-bold text-cyan-700" href={href} target="_blank">{text}</a>
    );
}

export default async function Page() {
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-bold text-neutral-900">Contributing to Open Source</h1>
                        <Header>Introduction</Header>
                        <Description>
                            Here at FemDevs, we believe that code should be open-sourced, with very few exceptions (such as paid commissions).
                        </Description>
                        <Description>
                            Open-sourced code bases have been shown to be more updated and in reality secure than proprietary code bases
                            which don&apos;t allow users to view the code and create public bug fixes.
                            Along with that, it also can help new developers learn how to program.
                            For these reasons and many more, we have made this website open-source on GitHub.
                        </Description>
                        <Header>How to Contribute</Header>
                        <Description>
                            To access it, head to our <Link href="https://github.com/femdevs/femdev-website" text="official website repository" />
                            and follow our guide on <Link href="https://thefemdevs.com/oss/contributing" text="how to contribute" /> to our open source repository.
                        </Description>
                    </div>
                </div>
            </hero>
        </content>
    );
}
