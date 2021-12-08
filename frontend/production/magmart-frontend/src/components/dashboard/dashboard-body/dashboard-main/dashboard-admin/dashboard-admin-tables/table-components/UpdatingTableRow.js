import React from 'react';
import {StyledTableRow} from "../../../../../../styled-components/table-styles/table-row.styled";

function UpdatingTableRow(props) {



    return (
        <StyledTableRow>
            {props.children}
        </StyledTableRow>
    );
}

export default UpdatingTableRow;