import React, { Component } from "react";

import "./Dashboard.scss";
import DashboardNavbar from "./dashboard-navbar/DashboardNavbar";
import DashboardBody from "./dashboard-body/DashboardBody";

export default function Dashboard(props) {
    const { user, cart, isLoggedIn, cartController, logoutController } = props;

    return (
        <div className="dashboard-container">
            <DashboardNavbar
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                logoutController={logoutController}
            />
            <DashboardBody
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                cartController={cartController}
                logoutController={logoutController}
            />
        </div>
    );
}
