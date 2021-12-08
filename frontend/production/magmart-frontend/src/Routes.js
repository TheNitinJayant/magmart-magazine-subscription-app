import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import SignUpPage from "./pages/sign-up-page/SignUpPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";

import ComponentTest from "./ComponentTest";
import ComponentTestNitin from "./ComponentTestNitin";

import AuthenticationData from "./authentication/AuthenticationData";
import { ROOT, SHOP, SIGN_IN, SIGN_UP, DASHBOARD } from "./FrontendRoutes";
import ShopPage from "./pages/shop-page/ShopPage";
import DashboardAdminUsers from "./components/dashboard/dashboard-body/dashboard-main/dashboard-admin/dashboard-admin-users/DashboardAdminUsers";

export default function Routes(props) {
    const { user, cart, isLoggedIn } = props;
    const loginController = props.loginController;
    const logoutController = props.logoutController;
    const addToCartController = props.addToCartController;
    const removeFromCartController = props.addToCartController;

    const landingPage = <LandingPage />;
    const dashboardPage = (
        <DashboardPage
            user={user}
            cart={cart}
            isLoggedIn={isLoggedIn}
            logoutController={logoutController}
        />
    );
    const signInPage = (
        <SignInPage
            user={user}
            cart={cart}
            isLoggedIn={isLoggedIn}
            loginController={loginController}
        />
    );
    const signUpPage = <SignUpPage />;
    const shopPage = (
        <ShopPage
            addToCartController={addToCartController}
            removeFromCartController={removeFromCartController}
            user={user}
            cart={cart}
            isLoggedIn={isLoggedIn}
        />
    );

    const root = isLoggedIn ? dashboardPage : landingPage;
    const dashboard = isLoggedIn ? dashboardPage : landingPage;

    return (
        <>
            <Switch>
                <Route exact path={ROOT}>
                    {root}
                </Route>

                <Route exact path={SIGN_IN}>
                    {signInPage}
                </Route>

                <Route exact path={SIGN_UP}>
                    {signUpPage}
                </Route>

                <Route exact path={SHOP}>
                    {shopPage}
                </Route>

                <Route exact path={DASHBOARD}>
                    {dashboard}
                </Route>

                <Route path="/test" exact component={ComponentTest} />
                <Route
                    path="/test-nitin"
                    exact
                    component={DashboardAdminUsers}
                />
            </Switch>
        </>
    );
}
