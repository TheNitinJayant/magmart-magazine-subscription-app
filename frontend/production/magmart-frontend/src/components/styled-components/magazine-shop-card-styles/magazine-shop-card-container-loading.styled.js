import styled, {keyframes} from "styled-components";

const load = keyframes` 
    to {
      background-position-x: -200%;
    }
`;

export const StyledMagazineShopCardContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 30rem;
  width: 25rem;

  margin: 2rem;
  padding: 1rem;

  overflow: hidden;

  border-radius: 18px;
  box-shadow:  7px 7px 9px #e3e6ea, -7px -7px 9px #ffffff;

  background: #eeee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1s ${load} linear infinite;
  
`;