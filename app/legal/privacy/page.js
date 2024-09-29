import Statement from "#/components/Statement";
import LegalDisclaimer from "#/components/LegalDisclaimer";

export default function Page() {
    /*
    content.flex.flex-col.items-center.justify-center
        hero.flex.w-full.max-w-6xl.flex-row.items-center.justify-between.p-8(class='md:my-16')
            .flex.w-full.flex-col.space-y-8
                .flex.w-full.flex-col.space-y-4
                    h1.select-none.font-poppins.text-5xl.font-medium.text-neutral-900 Privacy Policy
                    p.select-none.font-poppins.text-xl.text-neutral-900 Last Updated 1st September 2023
                .flex.w-full.flex-col.space-y-4
                    +statement('1. Introduction', 'The Femdevs ("we", "us", "our") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thefemdevs.com (the "Website"). Please read this Privacy Policy carefully. By using our Website, you agree to the collection and use of information in accordance with this policy.')
                    +statement('2. Information We Collect', '')
                    +statement('2.1 Personal Data', 'While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, geolocation, Internet Protocol (IP) address, and financial information.')
                    +statement('2.2 Usage Data', 'We may also collect information about how the Website is accessed and used. This Usage Data may include information such as your computer\'s Internet Protocol address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.')
                    +statement('3. Use of Data', 'We use the collected data for various purposes, including: to provide and maintain our Website, to notify you about changes to our Website, to allow you to participate in interactive features of our Website when you choose to do so, to provide customer support, to gather analysis or valuable information so that we can improve our Website, to monitor the usage of our Website, and to detect, prevent, and address technical issues.')
                    +statement('4. Transfer of Data', 'Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.')
                    +statement('5. Disclosure of Data', 'We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of the FemDevs, prevent or investigate possible wrongdoing in connection with the Website, protect the personal safety of users of the Website or the public, and protect against legal liability.')
                    +statement('6. Security of Data', 'The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Currently, all important data is either stored off-site in enterprise-level security systems such as with financial information. For lesser information, such as Internet Protocol (IP) addresses, your data is hashed using every possible method available on Node version 20, with a final hash using the "id-rsassa-pkcs1-v1_5-with-sha3-512" algorithm. This data is then stored on a database that is secured using a strong 512 bit passkey over SSL.')
                    +statement('7. Changes to This Privacy Policy', 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.')
                    h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 8. Contact Us
                    +legalDisclaimer()
    */
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">Privacy Policy</h1>
                        <p className="select-none font-poppins text-xl text-neutral-900">Last Updated 1st September 2023</p>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Statement
                            main="1. Introduction"
                            sub="The FemDevs ('we', 'us', 'our') respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thefemdevs.com (the 'Website'). Please read this Privacy Policy carefully. By using our Website, you agree to the collection and use of information in accordance with this policy."
                        />
                        <Statement
                            main="2. Information We Collect"
                        />
                        <Statement
                            main="2.1 Personal Data"
                            sub="While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, geolocation, Internet Protocol (IP) address, and financial information."
                        />
                        <Statement
                            main="2.2 Usage Data"
                            sub="We may also collect information about how the Website is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data."
                        />
                        <Statement
                            main="3. Use of Data"
                            sub="We use the collected data for various purposes, including: to provide and maintain our Website, to notify you about changes to our Website, to allow you to participate in interactive features of our Website when you choose to do so, to provide customer support, to gather analysis or valuable information so that we can improve our Website, to monitor the usage of our Website, and to detect, prevent, and address technical issues."
                        />
                        <Statement
                            main="4. Transfer of Data"
                            sub="Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction."
                        />
                        <Statement
                            main="5. Disclosure of Data"
                            sub="We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of the FemDevs, prevent or investigate possible wrongdoing in connection with the Website, protect the personal safety of users of the Website or the public, and protect against legal liability."
                        />
                        <Statement
                            main="6. Security of Data"
                            sub="The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Currently, all important data is either stored off-site in enterprise-level security systems such as with financial information. For lesser information, such as Internet Protocol (IP) addresses, your data is hashed using every possible method available on Node version 20, with a final hash using the 'id-rsassa-pkcs1-v1_5-with-sha3-512' algorithm. This data is then stored on a database that is secured using a strong 512 bit passkey over SSL."
                        />
                        <Statement
                            main="7. Changes to This Privacy Policy"
                            sub="We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
                        />
                        <Statement
                            main="8. Contact Us"
                        />
                        <LegalDisclaimer />
                    </div>
                </div>
            </hero>
        </content>
    );
}
