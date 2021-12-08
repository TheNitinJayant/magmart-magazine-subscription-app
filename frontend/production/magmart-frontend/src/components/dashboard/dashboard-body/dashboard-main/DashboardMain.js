import React from "react";
import DashboardHome from "./Dashboard-home/DashboardHome";

import "./DashboardMain.scss";

function DashboardMain(props) {
    const { user, cart, isLoggedIn } = props;

    return <div className="dashboard-main-container">{props.render}</div>;
}

export default DashboardMain;
