import SocialIcon from "./ProfileSocialIcon";

export default function Social({ ver, icon, link, title}) {
    return (
        <div className='justify-evenly size-full flex content-center p-2'>
            <SocialIcon type={ver} icon={icon} href={link} title={title} />
        </div>
    );
}
