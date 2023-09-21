import React from "react";
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link to="/" className="logo">#VANLIFE</Link>
            <nav className="nav--links--container">
                <NavLink 
                    to="/host" 
                    className="nav--link"
                    style={({isActive}) => isActive ? activeStyle : null}
                >Host</NavLink>
                <NavLink 
                    to="/about" 
                    className="nav--link"
                    style={({isActive}) => isActive ? activeStyle : null}
                >About</NavLink>
                <NavLink 
                    to="/vans" 
                    className="nav--link"
                    style={({isActive}) => isActive ? activeStyle : null}
                >Vans</NavLink>
                <NavLink 
                    to="/login" 
                    className="nav--link"
                    style={({isActive}) => isActive ? activeStyle : null}
                >Login</NavLink>
            </nav>
        </header>
    )
}