import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import AuthAxios from "../../../../../authentication/AuthAxios";
import AuthenticationData from "../../../../../authentication/AuthenticationData";
import { SHOP, SHOWCART, SUBSCRIPTIONS } from "../../../../../BackendRoutes";
import "./DashboardUserCart.scss";
import CheckOutBtn from "./DashboardUserCartComponents/CheckOutBtn/CheckOutBtn";
import DashboardUserCartItem from "./DashboardUserCartComponents/Dashboard-user-cart-items/DashboardUserCartItem";

import axios from "axios";

function DashboardUserCart({ cart }) {
    const [subData, setSubData] = useState([]);
    const [cartArray, setCartArray] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [apiError, setApiError] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);
    const [cartValue,setCartValue] = useState([]);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [toggleRefresh, setToggleRefresh] = useState(false);

    const [previousData, setPreviousData] = useState(null);

    const [total, setTotal] = useState([]);

    const currentUser = AuthenticationData.getUser();

    useEffect(() => {
        console.log("cart set is ", cart);
        let cartArray = new Array(...cart);
        setCartArray(cartArray);
        console.log("cart array is ", cartArray);

        axios({
            method: "get",
            url: "http://localhost:8080/showsubscription",
        })
            .then((response) => {
                let newData = [];
                response.data.forEach((re) => {
                    cartArray.forEach((ce) => {
                        if (re.sub_id === ce) {
                            newData.push({
                                id: re.sub_id,
                                sub_id: re.sub_id,
                                price: re.price,
                                time: re.time,
                                mag_id: re.magazine.mag_id,
                                mag_name: re.magazine.mag_name,
                                genre: re.magazine.genre,
                                image:re.magazine.image
                            });
                        }
                    });
                });
                console.log("final data is ", newData);
                setCartValue(newData);
                
            })
            .catch((err) => {
                console.log(err);
            });

        console.log("use effect called");
        setApiLoading(true);
        setApiError(null);
        AuthAxios({
            method: "get",
            url: `${SHOWCART}/${currentUser.user_id}`,
        })
            .then((response) => {
                // console.log(response.data);
                let newData = response.data.map((row) => {
                    return { ...row, id: row.mag_id };
                });
                setCartData(newData);
                // newData.map((item) => {
                //     setTotal([...total,item.subscription.price]);
                // })
                // setTotal(newData.subscription.price);
                let sum = 0;
                for (let i = 0; i < newData.length; i++) {
                    sum += newData[i].subscription.price;
                    setTotal(sum);
                }

                setApiError(null);
            })
            .catch((err) => {
                setApiError(err);
            })
            .finally(() => {
                setApiLoading(true);
                setTimeout(() => {
                    setApiLoading(false);
                }, 2000);
            });
    }, [toggleRefresh]);

    return (
        <div className="dashboard__user__cart">
            <div className="dashboard__user__cart__container">
                <div className="dashboard__user__cart__title">
                    <h2>Cart</h2>
                </div>
                <div className="dashboard__user__cart__body">
                    {cartValue.map((item) => {
                        return (
                            <DashboardUserCartItem
                                Title={item.mag_name}
                                imageURL={item.image}
                                Price={item.price}
                                key={item.cart_id}
                            />
                        );
                    })}
                </div>
                <div className="dashboard__user__cart__checkout">
                    <div className="dashboard__user__cart__checkout__price">
                        <h4>Total Amount</h4>
                        <h5>₹ {total}</h5>
                    </div>
                    <div>
                        <CheckOutBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardUserCart;
