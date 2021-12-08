import React from "react";

import { StyledNavbar } from "../../styled-components/navbar-styles/navbar.styled";
import { NavbarButton } from "../../styled-components/navbar-styles/navbar-button.styled";

import ThemeSwitch from "../../common/theme-switch/ThemeSwitch";

import "./DashboardNavbar.scss";
import { useHistory } from "react-router";

import { redirectTo } from "../../../utility/redirect";

function DashboardNavbar(props) {
    const history = useHistory();

    const { logoutController } = props;

    const handleChange = () => {
        console.log("changed");
    };

    const logout = () => {
        logoutController();
    };

    const shop = () => {
        redirectTo(history, "/shop");
    };

    return (
        <StyledNavbar theme="light">
            <div className="brand-container">
                <span className="brand-name">MagMart</span>
                <ThemeSwitch changeTheme={handleChange} />
            </div>
            <div className="nav-links-container">
                <NavbarButton onClick={shop}>Shop</NavbarButton>
                <NavbarButton onClick={logout}>Logout</NavbarButton>
            </div>
        </StyledNavbar>
    );
}

export default DashboardNavbar;
