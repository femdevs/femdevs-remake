import Nav from '#/components/Nav';
import Footer from '#/components/Footer';
import { BaseReactProps } from "lib/m/types";

export default async function Layout({ children }: BaseReactProps) {
    return (
        <body className="bg-neutral-200">
            <Nav lang={'en-US'} />
            {children}
            <Footer lang={'en-US'} />
        </body>
    );
}
