import React from "react";

import "./DashboardSidebar.scss";
import { StyledSidebar } from "../../../styled-components/sidebar-styles/sidebar.styled";

import SidebarNav from "./dashboard-sidebar-nav/SidebarNav";

function DashboardSidebar(props) {
    const { user, componentList, handleComponentChange } = props;

    const navs = componentList.map((nav) => (
        <SidebarNav
            handleComponentChange={handleComponentChange}
            id={nav.id}
            text={nav.name}
            icon={nav.icon}
            isActive={nav.isActive}
        />
    ));

    return (
        <StyledSidebar>
            <div className="sidebar-greeting">
                <h2>Hello, {user.fullname}</h2>
            </div>
            <div className="sidebar-navs">{navs}</div>
        </StyledSidebar>
    );
}

export default DashboardSidebar;
