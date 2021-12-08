import styled from 'styled-components';

import { globalStyles } from '../global-styles';

const theme = (props) => { console.log(props.theme); return props.theme };

const sidebarStyles =  globalStyles.light.navbar;

export const StyledSidebar = styled.div`
    display: flex;
    flex: 20%;
    
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  
    height: 100%;
    background-color: ${sidebarStyles.backgroundColor};
`;