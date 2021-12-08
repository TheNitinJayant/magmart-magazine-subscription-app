import React from "react";
import { StyledMagazineShopCardAction } from "../../../styled-components/magazine-shop-card-styles/magazine-shop-card-action.styled";

export default function MagazineShopCardAction(props) {
    const { name, action, id } = props;

    const handleClick = () => {
        console.log("adding to cart with id ", id);
        action(id);
    };

    return (
        <StyledMagazineShopCardAction onClick={handleClick}>
            {name}
        </StyledMagazineShopCardAction>
    );
}
