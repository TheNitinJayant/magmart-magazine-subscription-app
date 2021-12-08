import React from "react";
import { StyledButton } from "../../../../../styled-components/button-styles/button.styled";

import { globalStyles } from "../../../../../styled-components/global-styles";

const deleteButtonBackgroundColor =
    globalStyles.light.alertButton.backgroundColor;
const deleteButtonColor = globalStyles.light.alertButton.color;

const infoButtonBackgroundColor = globalStyles.light.infoButton.backgroundColor;
const infoButtonColor = globalStyles.light.infoButton.color;

export default function UpdateAction(props) {
    const { id, handleUpdate } = props;

    const handleClick = () => {
        handleUpdate(id);
    };

    return (
        <StyledButton
            backgroundColor={infoButtonBackgroundColor}
            color={infoButtonColor}
            onClick={handleClick}
        >
            Update
        </StyledButton>
    );
}
