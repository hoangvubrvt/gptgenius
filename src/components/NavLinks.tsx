import Link from "next/link";

const links = [
    { href: '/chat', label: 'Chat' },
    { href: '/tours', label: 'Tours' },
    { href: '/tours/new-tour', label: 'New Tour' },
    { href: '/profile', label: 'Profile' },
]

const NavLinks = () => {
    return (
        <div className="menu text-base-content">
            <ul>
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className="capitalize">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks;