import styled from "styled-components";

import { globalStyles } from "../global-styles";

const backgroundColor = globalStyles.light.button.backgroundColor;
const color = globalStyles.light.button.color;

export const NavbarButton = styled.a`
    text-decoration: none;
    text-align: center;
    font-weight: bold;

    color: ${backgroundColor};

    padding: 0.8rem 2rem;
    border-radius: 2rem;
    
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: ${backgroundColor};
        color: ${color};
    }
`;