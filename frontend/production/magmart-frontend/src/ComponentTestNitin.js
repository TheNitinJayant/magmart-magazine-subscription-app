import React from 'react'
// import Banner from './components/landing-page/main-banner/Banner'
// import Navbar from './components/landing-page/navbar/Navbar'
import SignInPage from './pages/sign-in-page/SignInPage'
import DashboardNavbar from "./components/dashboard/dashboard-navbar/DashboardNavbar";
import DashboardSidebar from "./components/dashboard/dashboard-body/dashboard-sidebar/DashboardSidebar";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import AuthenticationData from "./authentication/AuthenticationData";
import AuthAxios from "./authentication/AuthAxios";
import Shop from "./components/shop/Shop";

export default function ComponentTestNitin() {

    const setToken = () => {
        AuthenticationData.setToken("token123");
        console.log(AuthenticationData.getToken());
    }

    const makeRequest = () => {
        AuthAxios.get("http://localhost:8080/test")
            .then((res)=>console.log(res));
    }

    const showToken = () => {
        console.log(AuthenticationData.getToken());
    }

    const clear = () => {
        AuthenticationData.clearToken();
    }

    return (
        <div>

            <Shop />

        </div>
    );
}