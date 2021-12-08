import styled from "styled-components";

export const StyledFormAlertText = styled.p`
    color: ${ (props)=>props.color || "red" };
`;