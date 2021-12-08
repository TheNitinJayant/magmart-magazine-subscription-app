import styled, { keyframes } from "styled-components";

import { globalStyles } from "../global-styles";

const backgroundColor = globalStyles.light.body.primaryColor.hex;

const load = keyframes` 
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
`;

export const StyledMagazineShopCardActionLoading = styled.button`
  
    position: relative;
    background-color: ${backgroundColor};
    width: 9rem;
    height: 2.5rem;
    color: white;

    font-weight: bold;

    margin: 1rem 0;

    border-radius: 1rem;
    border: 1px solid ${backgroundColor};

    cursor: pointer;

    &:after{
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${load} 1s ease infinite;
    }
    
`;

