import React from 'react';
import {StyledTableHead} from "../../../../../../styled-components/table-styles/table-head.styled";

function TableHead(props) {
    return (
        <StyledTableHead>
            {props.children}
        </StyledTableHead>
    );
}

export default TableHead;