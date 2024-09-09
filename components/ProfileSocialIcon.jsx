export default function SocialIcon({ href, icon, type, title }) {
    const
        baseClasses = 'hover:text-indigo-500 hover:scale-110 transition-all duration-300 p-0 border-1 border-solid border-transparent rounded-3xl no-underline items-center self-center justify-center flex flex-col pt-4 text-gray-700',
        iType = ['code', 'user', 'users', 'envelope'].includes(icon) ? 'fas' : 'fab',
        classes = type === 1 ? `${baseClasses} ${iType} fa-${icon} fa-3x` : `${baseClasses} text-5xl mso`;
    return (
        <a href={href} target='_blank' className={classes} title={title} rel='me'>
            {type === 1 ? '' : icon}
        </a>
    );
}
