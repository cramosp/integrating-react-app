import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
        </nav>
    );
}

export default Navbar;