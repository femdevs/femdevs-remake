import ProfileImage from "#/components/ProfileImage";
import Description from "#/components/ProfileDescription";
import Header from "#/components/ProfileHeader";
import Icon from "#/components/ProfileSocialIcon";
import Bold from "#/components/Bold";

/** @return {import('next').Metadata} */
export async function generateMetadata() {
    return {
        title: 'Alex\'s Profile',
        description: 'About Alex, a crucial manager within the FemDevs',
        alternates: {
            canonical: `/profile/alex`,
        },
        openGraph: {
            title: 'Alex\'s Profile',
            description: 'About Alex, a crucial manager within the FemDevs',
            url: `/profile/alex`,
            siteName: 'Alex\'s Profile',
            images: [
                {
                    href: '/assets/images/grav/ad7cc897aef0988a7f7039f16417008b',
                },
            ],
        },
        twitter: {
            title: 'Alex\'s Profile',
            description: 'About Alex, a crucial manager within the FemDevs',
            images: [
                {
                    href: '/assets/images/grav/ad7cc897aef0988a7f7039f16417008b',
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
                        <ProfileImage name="Alex" link="https://thefemdevs.com/assets/images/grav/ad7cc897aef0988a7f7039f16417008b" />
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Me</h1>
                        <Description>
                            Hai, I&apos;m Alex! (She/They), an exceptionally silly 17 year old :3
                        </Description>
                        <Header title="FemDevs" />
                        <Description>
                            As a co-owner of <Bold value={(<a href="https://thefemdevs.com/">The FemDevs</a>)} />,
                            I&apos;m committed to helping everyone thrive in the coding world, regardless of gender.
                            We also strive to make new and unique projects for people worldwide.
                        </Description>
                        <Header title="Language Proficiency" />
                        <Description>
                            I&apos;m fluent in both English and Arabic, and I&apos;m all for learning new languages.
                            I&apos;ve found a passion for translation
                            as a member of the <Bold value={(<a href="https://pronouns.page/">Pronouns.Page</a>)} /> team,
                            where we&apos;re dedicated to making the Arab world more inclusive and open.
                        </Description>
                        <Header title="General Interests" />
                        <Description>
                            I have loved cooking since I was child, and I like learning new recipes all the time.
                            And while I might not be great at it, I play video games, when I have some extra free time.
                            I also enjoy playing badminton, and hanging out with close friends, even though I&apos;m socially anxious.
                        </Description>
                        <Header title="Socials" />
                        <div className="grid grid-cols-2 grid-rows-6 justify-evenly place-items-center md:grid-cols-6 md:grid-rows-2 sm:grid-cols-4 sm:grid-rows-3">
                            <Icon
                                link="https://discord.com/users/1112774630416076850"
                                pack="fa6-brands"
                                icon="discord"
                                title="Discord Profile"
                            />
                            <Icon
                                link="https://www.instagram.com/auxiliaryfrfr/"
                                pack="fa6-brands"
                                icon="instagram"
                                title="Instagram Profile"
                            />
                            <Icon
                                link="https://github.com/auxiliaryfrfr"
                                pack="fa6-brands"
                                icon="github"
                                title="GitHub Profile"
                            />
                            <Icon
                                link="https://open.spotify.com/user/31a3c3jitxf3fde24p5ohiqfrmnm"
                                pack="fa6-brands"
                                icon="spotify"
                                title="Spotify Profile"
                            />
                            <Icon
                                link="https://twitter.com/auxiliaryfrfr"
                                pack="fa6-brands"
                                icon="twitter"
                                title="X (formerly Twitter) Profile"
                            />
                            <Icon
                                link="https://thefemdevs.com"
                                pack="fa6-solid"
                                icon="code"
                                title="The FemDevs"
                            />
                            <Icon
                                link="https://en.pronouns.page/@auxiliaryfrfr"
                                pack="simple-icons"
                                icon="pronounsdotpage"
                                title="Pronouns.Page"
                            />
                            <Icon
                                link="https://www.youtube.com/channel/UCfK45ILqng9SMe7EcCzd57g"
                                pack="fa6-brands"
                                icon="youtube"
                                title="YouTube Profile"
                            />
                            <Icon
                                link="https://www.snapchat.com/add/auxiliaryfrfr"
                                pack="fa6-brands"
                                icon="snapchat"
                                title="Snapchat Profile"
                            />
                            <Icon
                                link="https://www.last.fm/user/auxiliaryfrfr"
                                pack="fa6-brands"
                                icon="lastfm"
                                title="LastFM Profile"
                            />
                            <Icon
                                link="mailto:alex@thefemdevs.com"
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
