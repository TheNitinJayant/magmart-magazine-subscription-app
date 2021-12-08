import React from 'react';
import {StyledTableData} from "../../../../../../styled-components/table-styles/table-data.styled";

function TableData(props) {
    return (
        <StyledTableData>
            {props.children}
        </StyledTableData>
    );
}

export default TableData;