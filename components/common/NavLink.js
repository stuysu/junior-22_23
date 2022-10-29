import Link from "next/link";

export default function NavLink ({children, href}) {
    return (
        <Link href={href}>
            <a className="navlink">
                {children}
            </a>
        </Link>
    )
}