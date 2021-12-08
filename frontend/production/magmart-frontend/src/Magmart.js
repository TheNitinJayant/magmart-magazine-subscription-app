import React, { useEffect, useState } from "react";
import "./Magmart.scss";
import Routes from "./Routes";
import AuthenticationData from "./authentication/AuthenticationData";
import CartData from "./data/CartData";
import { redirectTo } from "./utility/redirect";
import { useHistory } from "react-router";

export default function Magmart(props) {
    useEffect(() => {
        // if (CartData.hasCart()) {
        //     setCart(CartData.getCart());
        // } else {
        //     setCart(new Set());
        // }
    }, []);

    const [darkTheme, setDarkTheme] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(
        AuthenticationData.isAuthenticated()
    );
    const [user, setUser] = useState(getInitialUser());
    const [cart, setCart] = useState(null);

    const history = useHistory();

    function logout() {
        AuthenticationData.clearToken();
        AuthenticationData.clearUser();
        CartData.clearCart();
        setIsLoggedIn(false);
        setUser(null);
        setCart(new Set());

        redirectTo(history, "/");
    }

    function login(user, token, cart) {
        AuthenticationData.setToken(token);
        AuthenticationData.setUser(user);

        setIsLoggedIn(true);
        setUser(user);
        setCart(cart);

        redirectTo(history, "/dashboard");
    }

    function getInitialUser() {
        if (AuthenticationData.hasUser()) {
            return AuthenticationData.getUser();
        }
        return null;
    }

    function addToCart(id) {
        let oldCart = cart;
        console.log("old cart is ", oldCart);
        if (oldCart) {
            oldCart.add(id);
            setCart(oldCart);
            // CartData.setCart(cart);
        } else {
            let newCart = new Set();
            newCart.add(id);
            // CartData.setCart(newCart);
            setCart(newCart);
        }
        // CartData.setCart(cart);
        console.log(cart);
    }

    function removeFromCart(id) {
        let oldCart = cart;
        if (oldCart) {
            oldCart.delete(id);
            CartData.setCart(oldCart);
            setCart(oldCart);
        }
    }

    function switchTheme() {
        setDarkTheme(!darkTheme);
    }

    return (
        <div>
            <Routes
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                setUserController={setUser}
                addToCartController={addToCart}
                removeFromCartController={removeFromCart}
                logoutController={logout}
                loginController={login}
                switchTheme={switchTheme}
            />
        </div>
    );
}
