/* eslint-disable @next/next/no-img-element */
import { BaseReactProps } from "lib/m/types";

export default function ProfileImage({ link, name }: BaseReactProps<{ link: string, name: string }>) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={link}
                alt={name}
                className='p-8 rounded-full w-1/2'
            />
        </div>
    );
}
