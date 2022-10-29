import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink href="/">
                Home
            </NavLink>
            <NavLink href="/members">
                Members
            </NavLink>
        </div>
    )
}