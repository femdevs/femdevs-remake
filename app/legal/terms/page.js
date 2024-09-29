import Statement from "#/components/Statement";
import LegalDisclaimer from "#/components/LegalDisclaimer";

export default function Page() {
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-8">
                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">Terms of Service</h1>
                        <p className="select-none font-poppins text-xl text-neutral-900">Last Updated 1st September 2023</p>
                    </div>
                    <div className="flex w-full flex-col space-y-4">
                        <Statement
                            main="1. Introduction"
                            sub="Welcome to thefemdevs.com (the 'Website'). This Website is owned and operated by the FemDevs ('we', 'us', 'our'). By accessing or using our Website and its associated software, networks, and processes, including purchasing any products or services through this Website, you represent, warrant, understand and agree: (1) to accept, comply with, and be bound by these Terms of Service; (2) that you have the right, authority, and capacity to abide by these Terms of Service; (3) to comply with all applicable laws, rules and regulations concerning your access to and use of the Website."
                        />
                        <Statement
                            main="2. Intellectual Property"
                            sub="All intellectual property rights pertaining to any content, materials or services on the Website belongs to the FemDevs, unless otherwise stated. This includes but is not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations and software."
                        />
                        <Statement
                            main="3. User Conduct"
                            sub="As a user of our Website, you agree to use our Website responsibly, to adhere to all applicable laws and regulations, and to respect the rights and dignity of others. Users are strictly prohibited from engaging in any activities that we, at our sole discretion, deem to be offensive, unlawful, harassing, defamatory, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable."
                        />
                        <Statement
                            main="4. Privacy Policy"
                            sub="We respect your privacy and the use and protection of your personal information. Please refer to our Privacy Policy for information on how we collect, use and disclose personal information."
                        />
                        <Statement
                            main="5. Payments"
                            sub="We use Stripe to process payments. By using our Website, you agree to be bound by Stripe's Terms of Service. You can view Stripe's Terms of Service on their website. All payments made on the Website are subject to our payment terms. We reserve the right to change the prices of our products and services at any time."
                        />
                        <Statement
                            main="6. Termination"
                            sub="We may, under certain circumstances and without prior notice, immediately terminate your access to the Website. Cause for such termination shall include, but not be limited to, breaches or violations of the Terms of Service or other incorporated agreements or guidelines."
                        />
                        <Statement
                            main="7. Limitation of Liability"
                            sub="To the extent permitted by law, the FemDevs will not be held liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the Website."
                        />
                        <Statement
                            main="8. Modifications to the Service"
                            sub="The FemDevs reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice at any time. You agree that the FemDevs will not be liable to you or to any third party for any modification, suspension or discontinuance of the Service."
                        />
                        <Statement
                            main="9. Governing Law"
                            sub="These Terms of Service shall be governed by and construed in accordance with the laws of the United States of America. You agree to submit to the exclusive jurisdiction of the courts of the United States of America."
                        />
                        <Statement
                            main="10. Changes to the Terms of Service"
                            sub="We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
                        />
                        <Statement
                            main="11. Contact Us"
                        />
                        <LegalDisclaimer />
                    </div>
                </div>
            </hero>
        </content>
    );
}
