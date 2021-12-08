import styled from "styled-components";

import { globalStyles } from "../global-styles";

const backgroundColor = globalStyles.light.body.primaryColor.hex;


export const StyledSubmitButton = styled.button`
    
    background-color: ${backgroundColor};
    width: 9rem;
    height: 2.5rem;
    color: white;

    font-weight: bold;

    margin: 1rem 0;

    border-radius: 1rem;
    border: 1px solid ${backgroundColor};

    cursor: pointer;

    transition: all 0.5s ease-in-out;

    &:hover{
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);;
    }
`;

