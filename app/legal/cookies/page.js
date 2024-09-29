import Statement from "#/components/Statement";
import LegalDisclaimer from "#/components/LegalDisclaimer";

export default function Page() {
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">Cookie Policy</h1>
                        <p className="select-none font-poppins text-xl text-neutral-900">Last Updated 1st September 2023</p>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Statement
                            main="1. Introduction"
                            sub="At thefemdevs.com ('we', 'us', 'our'), we believe in being clear and open about how we collect and use data related to you. This policy provides detailed information about how and when we use cookies."
                        />
                        <Statement
                            main="2. Does our site use cookies?"
                            sub="Yes. We use cookies and other technologies to ensure everyone who uses our website has the best possible experience."
                        />
                        <Statement
                            main="3. What is a cookie?"
                            sub="A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another."
                        />
                        <Statement
                            main="4. Why do we use cookies?"
                            sub="We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies enable us to track and target the interests of our users and to enhance the experience on our website. Third parties serve cookies through our website for analytics and other purposes."
                        />
                        <Statement
                            main="5. How can you control cookies?"
                            sub="You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings to refuse cookies or to indicate when a cookie is being sent. However, please note that if you choose to refuse cookies, you may not be able to use the full functionality of our website."
                        />
                        <Statement
                            main="6. Updates to this policy"
                            sub="We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies."
                        />
                        <Statement
                            main="7. Contact Us"
                        />
                        <LegalDisclaimer />
                    </div>
                </div>
            </hero>
        </content>
    );
}
