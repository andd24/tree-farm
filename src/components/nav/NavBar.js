import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <img className="navbar__item logo" src="/images/pngfind.com-pine-tree-silhouette-png-47958.png" alt="logo" height="170" width="170" />
            
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
            
            </div>
        </>
        
    )
}