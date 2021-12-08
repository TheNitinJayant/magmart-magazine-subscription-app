import styled from "styled-components";

import { globalStyles } from "../global-styles";

const backgroundColor = globalStyles.light.body.primaryColor.hex;

export const StyledTHead = styled.thead`
    width: 100%;

    & tr {
        background-color: ${backgroundColor};
        color: #ffffff;
    }
`;
