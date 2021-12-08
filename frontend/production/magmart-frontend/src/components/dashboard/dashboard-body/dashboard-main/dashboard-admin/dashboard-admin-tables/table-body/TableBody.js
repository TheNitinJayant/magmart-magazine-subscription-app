import React from 'react';

import TableRow from "../table-components/TableRow";
import TableData from "../table-components/TableData";
import {StyledTBody} from "../../../../../../styled-components/table-styles/t-body.styled";
import {StyledTableRow} from "../../../../../../styled-components/table-styles/table-row.styled";
import TableInput from "../table-components/TableInput";
import UpdatingTableRow from "../table-components/UpdatingTableRow";

function TableBody(props) {

    const { header, data } = props;

    const render = data.map((row)=> {

        const columns = [];

        for (const property in row) {
            columns.push(<TableData>{row[property]}</TableData>);
        }

        return (
            <TableRow>
                {columns}
            </TableRow>
        );

    });

    return (
        <StyledTBody>
            {render}
        </StyledTBody>
    );
}

export default TableBody;