import React from "react";

import Dashboard from "../../components/dashboard/Dashboard";

function DashboardPage(props) {
    const { user, cart, isLoggedIn } = props;

    return (
        <Dashboard
            user={user}
            cart={cart}
            isLoggedIn={isLoggedIn}
            logoutController={props.logoutController}
        />
    );
}

export default DashboardPage;
