import SecuritySupport from '#/components/SecuritySupport';

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
                        <h1 className="select-none font-poppins text-5xl font-bold text-neutral-900">Security Policy</h1>
                        <Description>Last Updated 11th February 2024</Description>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Title>Supported Versions</Title>
                        <Description>The following versions of the website have accepted security policies</Description>
                        <table className="w-full border border-neutral-900 border-collapse">
                            <thead>
                                <tr>
                                    <th className="border border-neutral-900">Version</th>
                                    <th className="border border-neutral-900">Supported</th>
                                </tr>
                            </thead>
                            <tbody>
                                <SecuritySupport
                                    ver="5.0.0"
                                    supported={true}
                                    type={1}
                                />
                                <SecuritySupport
                                    ver="5.0.0"
                                    supported={false}
                                    type={2}
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Title>Reporting a Vulnerability</Title>
                        <Description>To report a vulnerability, please contact the administrative team at <Link href="mailto:admin@thefemdevs.com" text="admin@thefemdevs.com"/></Description>
                    </div>
                </div>
            </hero>
        </content>
    );
}
