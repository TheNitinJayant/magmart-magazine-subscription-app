import styled from 'styled-components';
import {globalStyles} from "../global-styles";

const backgroundColor = globalStyles.light.body.primaryColor.hex;
const hoverColor = "rgb(84, 184, 198, 0.3)";

export const StyledSidebarNav = styled.div`
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
    min-width: 80%;
    min-height: 1rem;
    padding: 1rem;
    margin: 0.5rem 0;

    border-radius: 1rem;
    border: 1px solid ${ (props)=> { return ( props.isActive ? backgroundColor : "white" ) } };

    cursor: pointer;
  
    color: ${ (props)=> { return ( props.isActive ? "white" : backgroundColor ) } };
    background-color: ${ (props)=> { return ( props.isActive ? backgroundColor : "white" ) } };
  
    transition: 0.3s ease-in-out;
  
    &:hover{
      background-color: ${ (props)=> { return ( !props.isActive ? hoverColor : backgroundColor ) } };;
    }
`;