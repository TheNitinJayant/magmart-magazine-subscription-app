import styled from "styled-components";

import { globalStyles } from "../global-styles";

const red = "red";

export const StyledFormInput = styled.input`
    
    height: 2rem;
    width: 14rem;

    padding: 1rem;
    margin: 1rem 0;

    border-radius: 10px;

    border: 3px solid white;
    outline: none;

    &:active, &:focus{
        border-color: ${(props) => props.bgColor || "white"};
        /* border-color: red; */
    }
`;