import React from 'react';
import {StyledSidebarNav} from "../../../../styled-components/sidebar-styles/sidebar-nav.styled";
import {StyledSidebarNavIcon} from "../../../../styled-components/sidebar-styles/sidebar-nav-icon.styled";
import {StyledSidebarNavText} from "../../../../styled-components/sidebar-styles/sidebar-nav-text.styled";

function SidebarNav(props) {

    const {handleComponentChange, id} = props;

    const handleChange = () => {
        handleComponentChange(id);
    }

    return (
        <StyledSidebarNav onClick={handleChange} isActive={props.isActive}>
            <StyledSidebarNavIcon className={props.icon}></StyledSidebarNavIcon>
            <StyledSidebarNavText>{props.text}</StyledSidebarNavText>
        </StyledSidebarNav>
    );
}

export default SidebarNav;