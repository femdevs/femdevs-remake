import OSSEnforcement from '#/components/OSSEnforcement';

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

export default async function Page() {
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-bold text-neutral-900">Code of Conduct</h1>
                        <p className="select-none font-poppins text-xl text-neutral-900">Last Updated 11th February 2024</p>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Title>Our Pledge</Title>
                        <Description>
                            We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                        </Description>
                        <Description>
                            We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                        </Description>
                        <Title>Our Standards</Title>
                        <Description>
                            Examples of behavior that contributes to a positive environment for our community include: Demonstrating empathy and kindness toward other people, being respectful of differing opinions, viewpoints, and experiences, giving and gracefully accepting constructive feedback, accepting responsibility and apologizing to those affected by our mistakes and learning from the experience, and focusing on what is best not just for us as individuals, but for the overall community
                        </Description>
                        <Description>
                            Examples of unacceptable behavior include: The use of sexualized language or imagery, and sexual attention or advances of any kind, trolling, insulting or derogatory comments, and personal or political attacks, public or private harassment, publishing others&apos; private information, such as a physical or email address, without their explicit permission, and other conduct which could reasonably be considered inappropriate in a professional setting
                        </Description>
                        <Title>Enforcement Responsibilities</Title>
                        <Description>
                            Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
                        </Description>
                        <Description>
                            Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
                        </Description>
                        <Title>Scope</Title>
                        <Description>
                            This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
                        </Description>
                        <Title>Enforcement</Title>
                        <Description>
                            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at admin@thefemdevs.com. All complaints will be reviewed and investigated promptly and fairly.
                        </Description>
                        <Description>
                            All community leaders are obligated to respect the privacy and security of the reporter of any incident.
                        </Description>
                        <Title>Enforcement Guidelines</Title>
                        <Description>
                            Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
                        </Description>
                        <OSSEnforcement
                            section="1. Correction"
                            impact="Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community."
                            consequence="A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested."
                        />
                        <OSSEnforcement
                            section="2. Warning"
                            impact="A violation through a single incident or series of actions."
                            consequence="A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban."
                        />
                        <OSSEnforcement
                            section="3. Temporary Ban"
                            impact="A serious violation of community standards, including sustained inappropriate behavior."
                            consequence="A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban."
                        />
                        <OSSEnforcement
                            section="4. Permanent Ban"
                            impact="Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals."
                            consequence="A permanent ban from any sort of public interaction within the community."
                        />
                        <Title>Attribution</Title>
                        <Description>
                            This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" target="_blank" className="text-cyan-700">https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</a>.
                        </Description>
                        <Description>
                            Community Impact Guidelines were inspired by Mozilla&apos;s code of conduct enforcement ladder.
                        </Description>
                        <Description>
                            FAQs are available at <a href="https://www.contributor-covenant.org/faq" target="_blank" className="text-cyan-700">https://www.contributor-covenant.org/faq</a>.
                        </Description>
                        <Description>
                            Translations are available at <a href="https://www.contributor-covenant.org/translations" target="_blank" className="text-cyan-700">https://www.contributor-covenant.org/translations</a>.
                        </Description>
                    </div>
                </div>
            </hero>
        </content>
    );
}
