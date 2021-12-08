import styled from 'styled-components';

import { globalStyles } from '../global-styles';

const theme = (props) => { console.log(props.theme); return props.theme };

const navStyles =  globalStyles.light.navbar;

export const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-height: 1rem;
    background-color: ${navStyles.backgroundColor};
  
    width: 100%
`;