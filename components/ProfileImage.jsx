/* eslint-disable @next/next/no-img-element */
export default function ProfileImage({ link, name }) {
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
