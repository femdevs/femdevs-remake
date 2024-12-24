import { BaseReactProps } from "lib/m/types";

export default function Description({ children }: BaseReactProps) {
    return (
        <div className='text-gray-700 mb-4'>
            <p>
                {children}
            </p>
        </div>
    );
}
