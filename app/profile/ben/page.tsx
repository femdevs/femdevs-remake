import ProfileImage from "#/components/ProfileImage";
import Description from "#/components/ProfileDescription";
import Header from "#/components/ProfileHeader";
import Icon from "#/components/ProfileSocialIcon";
import Bold from "#/components/Bold";

/** @return {import('next').Metadata} */
export async function generateMetadata() {
    return {
        title: 'Ben\'s Profile',
        description: 'About Benjamin, a crucial manager within the FemDevs',
        alternates: {
            canonical: `/profile/ben`,
        },
        openGraph: {
            title: 'Ben\'s Profile',
            description: 'About Benjamin, a crucial manager within the FemDevs',
            url: `/profile/ben`,
            siteName: 'Ben\'s Profile',
            images: [
                {
                    href: '/assets/images/grav/329f481757ca49ce98d31d9041285a11',
                },
            ],
        },
        twitter: {
            title: 'Ben\'s Profile',
            description: 'About Benjamin, a crucial manager within the FemDevs',
            images: [
                {
                    href: '/assets/images/grav/329f481757ca49ce98d31d9041285a11',
                },
            ],
        },
    };
}

export default function Page() {
    return (
        <body className="bg-gray-100 font-sans leading-normal tracking-normal">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                    <div className="p-6">
                        <ProfileImage name="Benjamin" link="https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11" />
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Me</h1>
                        <Description>
                            Hello! My name is Ben! I am a full stack developer who works on many applications.
                            I am the owner of The FemDevs, a community of developers who are passionate about technology.
                        </Description>
                        <Header title="Upbringing" />
                        <Description>
                            I am a completely self-taught full stack developer. Ever sense I was a child, I have had a passion for technology.
                            I have always been interested in how things work and how to make them better.
                        </Description>
                        <Description>
                            At Age <Bold value="5" />, I was using a computer at a proficient level.
                        </Description>
                        <Description>
                            At Age <Bold value="7" />, I was fixing technical issues with TVs and more.
                        </Description>
                        <Description>
                            At Age <Bold value="10" />, I was programming in HTML, CSS, and Javascript.
                        </Description>
                        <Description>
                            That was my first real introduction to the world of software and web development.
                            From there, I have honed my skills in Javascript/Typescript, both client-side and server-side.
                        </Description>
                        <Header title="Experience" />
                        <Description>
                            Outside of web development, I have experience in Python, Java, C++, Rust, and much, much more.
                            For databases, I have experience with MySQL, PostgreSQL, and SQLite.
                        </Description>
                        <Header title="Open Source" />
                        <Description>
                            I believe in the importance of having code bases be open source,
                            so almost every project I work on is open source and accessible to the public on GitHub.
                        </Description>
                        <Header title="Socials" />
                        <div className="grid grid-cols-3 grid-rows-3 justify-evenly place-items-center">
                            <Icon
                                link="https://discord.com/users/1158220643616182445"
                                pack="fa6-brands"
                                icon="discord"
                                title="Discord Profile"
                            />
                            <Icon
                                link="https://github.com/therealbenpai"
                                pack="fa6-brands"
                                icon="github"
                                title="GitHub Profile"
                            />
                            <Icon
                                link="https://open.spotify.com/user/mbvcmhkmq3rwhhrotcllhsk0q"
                                pack="fa6-brands"
                                icon="spotify"
                                title="Spotify Profile"
                            />
                            <Icon
                                link="https://thefemdevs.com"
                                pack="fa6-solid"
                                icon="code"
                                title="The FemDevs"
                            />
                            <Icon
                                link="https://en.pronouns.page/@therealbenpai"
                                pack="simple-icons"
                                icon="pronounsdotpage"
                                title="Pronouns.Page"
                            />
                            <Icon
                                link="https://www.youtube.com/@benshawmean"
                                pack="fa6-brands"
                                icon="youtube"
                                title="YouTube Profile"
                            />
                            <Icon
                                link="https://www.last.fm/user/therealbenpai"
                                pack="fa6-brands"
                                icon="lastfm"
                                title="LastFM Profile"
                            />
                            <Icon
                                link="https://keyoxide.org/aspe:keyoxide.org:JI3O6H2RNBQYQGJCSZRZYMF7NU"
                                pack="material-symbols"
                                icon="passkey-rounded"
                                title="Keyoxide Profile"
                            />
                            <Icon
                                link="mailto:ben@thefemdevs.com"
                                pack="fa6-solid"
                                icon="envelope"
                                title="Email"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
