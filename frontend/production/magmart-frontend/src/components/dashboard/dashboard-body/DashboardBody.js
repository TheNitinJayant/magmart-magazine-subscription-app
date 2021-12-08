import React, { useEffect, useState } from "react";
import DashboardSidebar from "./dashboard-sidebar/DashboardSidebar";
import DashboardMain from "./dashboard-main/DashboardMain";

import "./DashboardBody.scss";
import {
    DashboardTempHome,
    DashboardTempSettings,
    DashboardTempSubscriptions,
} from "../DashboardTemp";
import Shop from "../../shop/Shop";
import DashboardAdminUsers from "./dashboard-main/dashboard-admin/dashboard-admin-users/DashboardAdminUsers";
import DashboardAdminMagazines from "./dashboard-main/dashboard-admin/dashboard-admin-magazines/DashboardAdminMagazines";
import DashboardAdminSubscriptions from "./dashboard-main/dashboard-admin/dashboard-admin-subscriptions/DashboardAdminSubscriptions";
import AuthenticationData from "../../../authentication/AuthenticationData";
import FirstDashboardComponent from "./FirstDashboardComponent";
import DashBoardSubscriptions from "./dashboard-main/Dashboard-subscriptions/DashBoardSubscriptions";
import DashboardHome from "./dashboard-main/Dashboard-home/DashboardHome";
import DashboardUserCart from "./dashboard-main/dashboard-cart-user/DashboardUserCart";

function DashboardBody(props) {
    const { user, cart, isLoggedIn } = props;

    const currentUser = AuthenticationData.getUser();

    const userSidebar = [
        {
            id: "home",
            name: "Home",
            icon: "fas fa-home",
            isActive: true,
            render: <DashboardHome />,
        },
        {
            id: "subscriptions",
            name: "Subscriptions",
            icon: "fas fa-tasks",
            isActive: false,
            render: <DashBoardSubscriptions />,
        },
        {
            id: "settings",
            name: "Settings",
            icon: "fas fa-cog",
            isActive: false,
            render: <DashboardHome />,
        },
        // { id: "shop", name: "Shop", icon: "fas fa-store", isActive: false, render: <Shop appState={appState} cartController={cartController} /> },
        {
            id: "cart",
            name: "Cart",
            icon: "fas fa-cart-arrow-down",
            isActive: false,
            render: <DashboardUserCart cart={cart} />,
        },
    ];

    const adminSidebar = [
        {
            id: "users",
            name: "Users",
            icon: "fas fa-users",
            isActive: true,
            render: <DashboardAdminUsers />,
        },
        {
            id: "subscriptions",
            name: "Subscriptions",
            icon: "fas fa-tasks",
            isActive: false,
            render: <DashboardAdminSubscriptions />,
        },
        {
            id: "magazines",
            name: "Magazines",
            icon: "fas fa-newspaper",
            isActive: false,
            render: <DashboardAdminMagazines />,
        },
    ];

    // const [dashboardMainComponentsData, setDashboardMainComponentsData] =
    //     useState(userSidebar);

    const initialRender = () => {
        if (currentUser) {
            if (currentUser.user_role === 0) {
                return userSidebar;
            } else if (currentUser.user_role === 1) {
                return adminSidebar;
            }
        }
        return userSidebar;
    };

    const [dashboardMain, setDashboardMain] = useState(initialRender());

    useEffect(() => {
        console.log("dashboard use effect called");
        console.log("user role is ", currentUser);
        if (currentUser) {
            console.log("it has user");
            if (currentUser.user_role === 0) {
                setDashboardMain(userSidebar);
            } else if (currentUser.user_role === 1) {
                setDashboardMain(adminSidebar);
            }
        } else {
            setDashboardMain(userSidebar);
        }
    }, []);

    const [activeComponent, setActiveComponent] = useState(
        <FirstDashboardComponent />
    );

    const handleComponentChange = (id) => {
        switchComponent(id);
    };

    const switchComponent = (id) => {
        let active = null;
        const changedDashboard = dashboardMain.map((component) => {
            if (component.id == id) {
                component.isActive = true;
                active = component.render;
            } else {
                component.isActive = false;
            }
            return component;
        });
        setActiveComponent(active);
        setDashboardMain(changedDashboard);
    };

    return (
        <div className="dashboard-body">
            <DashboardSidebar
                componentList={dashboardMain}
                handleComponentChange={handleComponentChange}
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                logoutController={props.logoutController}
            />
            <DashboardMain
                render={activeComponent}
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                logoutController={props.logoutController}
            />
        </div>
    );
}

export default DashboardBody;
