import ProfileImage from "#/components/ProfileImage";
import Description from "#/components/ProfileDescription";
import Header from "#/components/ProfileHeader";
import Social from "#/components/ProfileSocial";
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
                            <Social ver={1} icon="discord" link="https://discord.com/users/1112774630416076850" title="Discord Profile" />
                            <Social ver={1} icon="instagram" link="https://www.instagram.com/auxiliaryfrfr/" title="Instagram Profile" />
                            <Social ver={1} icon="github" link="https://github.com/auxiliaryfrfr" title="GitHub Profile" />
                            <Social ver={1} icon="spotify" link="https://open.spotify.com/user/31a3c3jitxf3fde24p5ohiqfrmnm" title="Spotify Profile" />
                            <Social ver={1} icon="twitter" link="https://twitter.com/auxiliaryfrfr" title="X (formerly Twitter) Profile" />
                            <Social ver={1} icon="code" link="https://thefemdevs.com" title="The FemDevs" />
                            <Social ver={1} icon="users" link="https://en.pronouns.page/@auxiliaryfrfr" title="Pronouns.Page" />
                            <Social ver={1} icon="youtube" link="https://www.youtube.com/channel/UCfK45ILqng9SMe7EcCzd57g" title="YouTube Profile" />
                            <Social ver={1} icon="snapchat" link="https://www.snapchat.com/add/auxiliaryfrfr" title="Snapchat Profile" />
                            <Social ver={1} icon="lastfm" link="https://www.last.fm/user/auxiliaryfrfr" title="LastFM Profile" />
                            <Social ver={1} icon="envelope" link="mailto:alex@thefemdevs.com" title="Email" />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
