import React from "react";
import Navbar from "../../components/landing-page/navbar/Navbar";
import Shop from "../../components/shop/Shop";

function ShopPage(props) {
    const { user, cart, isLoggedIn, addToCartController } = props;

    return (
        <div>
            <Navbar />
            <Shop
                user={user}
                cart={cart}
                isLoggedIn={isLoggedIn}
                addToCartController={addToCartController}
            />
        </div>
    );
}

export default ShopPage;
