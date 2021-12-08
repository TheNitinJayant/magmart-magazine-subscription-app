import axios from "axios";
import React, { useEffect, useState } from "react";
import { SHOP, SUBSCRIPTIONS } from "../../BackendRoutes";
import MagazineShopCard from "./magazine-shop-card/MagazineShopCard";
import MagazineShopLoadingCard from "./magazine-shop-card/MagazineShopLoadingCard";

import "./Shop.scss";

function Shop(props) {
    const {
        user,
        cart,
        isLoggedIn,
        addToCartController,
        removeFromCartController,
    } = props;

    const loadingData = [];

    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const data = [
        {
            name: "Magazine1",
            genre: "Crime",
            image: "https://covers.magazinecloner.com/covers/194508.jpg",
        },
        {
            name: "Magazine2",
            genre: "News",
            image: "https://images.outlookindia.com/public/uploads/coverpics/large/ole_cover_large_20201123.jpg",
        },
        {
            name: "Magazine3",
            genre: "Tech",
            image: "https://image.isu.pub/210524141459-bfede92fc47bccbb6ea36850d909d5b1/jpg/page_1_thumb_large.jpg",
        },
        {
            name: "Magazine3",
            genre: "Tech",
            image: "https://image.isu.pub/210524141459-bfede92fc47bccbb6ea36850d909d5b1/jpg/page_1_thumb_large.jpg",
        },
        {
            name: "Magazine3",
            genre: "Tech",
            image: "https://image.isu.pub/210524141459-bfede92fc47bccbb6ea36850d909d5b1/jpg/page_1_thumb_large.jpg",
        },
        {
            name: "Magazine3",
            genre: "Tech",
            image: "https://image.isu.pub/210524141459-bfede92fc47bccbb6ea36850d909d5b1/jpg/page_1_thumb_large.jpg",
        },
        {
            name: "Magazine3",
            genre: "Tech",
            image: "https://image.isu.pub/210524141459-bfede92fc47bccbb6ea36850d909d5b1/jpg/page_1_thumb_large.jpg",
        },
    ];

    useEffect(() => {
        axios
            .get(SHOP)
            .then((response) => {
                const { data } = response;

                const subscriptionData = data.map((sub) => {
                    return {
                        ...sub,
                        mag_id: sub.magazine.mag_id,
                        mag_name: sub.magazine.mag_name,
                        genre: sub.magazine.genre,
                        image: sub.magazine.image,
                        publisher: sub.magazine.publisher.pub_name,
                    };
                });
                console.log(subscriptionData);
                setApiData(subscriptionData);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const render = () => {
        if (isLoading) {
            return (
                <>
                    <MagazineShopLoadingCard />
                    <MagazineShopLoadingCard />
                    <MagazineShopLoadingCard />
                </>
            );
        } else if (!isLoading) {
            let cards = apiData.map((card) => {
                return (
                    <MagazineShopCard
                        user={user}
                        cart={cart}
                        isLoggedIn={isLoggedIn}
                        addToCartController={addToCartController}
                        removeFromCartController={removeFromCartController}
                        subId={card.sub_id}
                        name={card.mag_name}
                        genre={card.genre}
                        image={card.image}
                        time={card.sub_time}
                        publisher={card.publisher}
                        price={card.price}
                    />
                );
            });

            return cards;
        }
    };

    return <div className="shop-container">{render()}</div>;
}

export default Shop;
