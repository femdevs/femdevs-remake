import Nav from '#/components/Nav';
import Footer from '#/components/Footer';

export default async function Layout({ children }) {
    return (
        <body className="bg-neutral-200">
            <Nav lang={'en-US'} />
            {children}
            <Footer lang={'en-US'} />
        </body>
    );
}
