import React from "react";
import { NavbarButton } from "../../styled-components/navbar-styles/navbar-button.styled";
import { StyledNavbar } from "../../styled-components/navbar-styles/navbar.styled";
import ThemeSwitch from "../../common/theme-switch/ThemeSwitch";

import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
    const handleChange = () => {
        console.log("changed");
    };

    return (
        <StyledNavbar theme="light">
            <div className="brand-container">
                <span className="brand-name">MagMart</span>
                <ThemeSwitch changeTheme={handleChange} />
            </div>
            <div className="nav-links-container">
                <NavbarButton>
                    <Link className="nav-links-link" to="/">
                        Home
                    </Link>
                </NavbarButton>
                <NavbarButton>
                    <Link className="nav-links-link" to="/shop">
                        Shop
                    </Link>
                </NavbarButton>
                <NavbarButton>
                    <Link className="nav-links-link" to="/signin">
                        Login
                    </Link>
                </NavbarButton>
                <NavbarButton>
                    <Link className="nav-links-link" to="/signup">
                        Signup
                    </Link>
                </NavbarButton>
            </div>
        </StyledNavbar>
    );
}
