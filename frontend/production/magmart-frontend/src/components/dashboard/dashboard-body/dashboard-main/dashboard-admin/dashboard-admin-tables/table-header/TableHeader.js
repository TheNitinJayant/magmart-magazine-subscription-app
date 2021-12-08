import React from 'react';
import TableRow from "../table-components/TableRow";
import TableHead from "../table-components/TableHead";
import {StyledTHead} from "../../../../../../styled-components/table-styles/t-head.styled";
import {StyledTableRow} from "../../../../../../styled-components/table-styles/table-row.styled";

function TableHeader(props) {

    const { header } = props;

    const render = header.map( (head)=> {
        return(
            <TableHead>{head}</TableHead>
        );
    } );

    return (
        <StyledTHead>
            <TableRow>
                {render}
            </TableRow>
        </StyledTHead>
    );
}

export default TableHeader;