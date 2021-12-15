import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">Order</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/account">My Account</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/" onClick={() => localStorage.removeItem("farm_user")}>Logout</Link>
            </li>
        </ul>
    )
}