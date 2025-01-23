import { BaseReactProps } from "lib/m/types";

export default function Header({ title, children }: BaseReactProps<{ title: string }>) {
    return (
        <>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>{title}</h2>
            {children}
        </>
    );
}
