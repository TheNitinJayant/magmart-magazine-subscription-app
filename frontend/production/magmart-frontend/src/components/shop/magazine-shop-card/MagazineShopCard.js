import React from "react";

import "./MagazineShopCard.scss";

import MagazineShopCardAction from "./magazine-shop-card-actions/MagazineShopCardAction";

import { StyledMagazineShopCardContainer } from "../../styled-components/magazine-shop-card-styles/magazine-shop-card-container.styled";
import { StyledMagazineShopCardImage } from "../../styled-components/magazine-shop-card-styles/magazine-shop-card-image.styled";
import { StyledMagazineShopCardTitle } from "../../styled-components/magazine-shop-card-styles/magazine-shop-card-title.styled";
import { StyledMagazineShopCardAction } from "../../styled-components/magazine-shop-card-styles/magazine-shop-card-action.styled";
import { StyledMagazineShopCardText } from "../../styled-components/magazine-shop-card-styles/magazine-shop-card-text.styled";

import { redirectTo } from "../../../utility/redirect";

import { useHistory } from "react-router";

function MagazineShopCard(props) {
    const history = useHistory();
    const { user, cart, isLoggedIn, addToCartController } = props;
    const { subId, name, image, time, price, genre, publisher } = props;

    const redirectToLogin = () => {
        redirectTo(history, "/signin");
    };

    const action = () => {
        let render = null;

        if (isLoggedIn) {
            render = (
                <MagazineShopCardAction
                    action={addToCartController}
                    name={"Add To Cart"}
                    id={subId}
                />
            );
        } else {
            render = (
                <MagazineShopCardAction
                    action={redirectToLogin}
                    name={"Log In"}
                />
            );
        }

        return render;
    };

    return (
        <StyledMagazineShopCardContainer>
            <StyledMagazineShopCardImage src={props.image} />
            <div className="magazine-title">
                <StyledMagazineShopCardTitle>
                    {props.name}
                </StyledMagazineShopCardTitle>
                <StyledMagazineShopCardText>
                    #{props.genre}
                </StyledMagazineShopCardText>
            </div>
            <div className="magazine-data">
                <StyledMagazineShopCardText>{time}</StyledMagazineShopCardText>

                <StyledMagazineShopCardText>
                    ${price}
                </StyledMagazineShopCardText>
            </div>

            {action()}
        </StyledMagazineShopCardContainer>
    );
}

export default MagazineShopCard;
