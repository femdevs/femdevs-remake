export default function Header({ title, children }) {
    return (
        <>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>{title}</h2>
            {children}
        </>
    );
}
