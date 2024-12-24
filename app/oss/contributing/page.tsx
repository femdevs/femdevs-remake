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

export function Bolded({ children }) {
    return (
        <em className="select-none font-poppins text-xl text-neutral-900 font-bold">
            {children}
        </em>
    );
}

export default async function Page() {
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-bold text-neutral-900">Contributing Policy</h1>
                        <p className="select-none font-poppins text-xl text-neutral-900">Last Updated 11th February 2024</p>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Title>
                            How to Contribute to the Repository
                        </Title>
                        <Description>
                            To contribute to this repository, please follow the following steps:
                        </Description>
                        <Description>
                            1. <Bolded>Fork</Bolded> this repository and edit it on your own repository.
                        </Description>
                        <Description>
                            2. If you would like to have them merged, make a <Bolded>pull request</Bolded> to this repository that includes a detailed explanation of the changes you made as well as an accurate and concise title.
                        </Description>
                        <Description>
                            3. Upon creating the pull request, GitHub will automatically request a review from both the <Link href="https://github.com/orgs/femdevs/teams/admin" text="admins" /> and the <Link href="https://github.com/orgs/femdevs/teams/code-review" text="code reviewers" /> to <Bolded>review</Bolded> your code and pull request information and then decide if the code is ready and is of high enough quality to be merged.
                        </Description>
                        <Description>
                            For more information, please contact us at <Link href="mailto:support@thefemdevs.com" text="this email address" /> and explain.
                        </Description>
                    </div>
                </div>
            </hero>
        </content>
    );
}
