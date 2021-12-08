import React from "react";
import TableHeader from "./table-header/TableHeader";
import TableBody from "./table-body/TableBody";
import { StyledTable } from "../../../../../styled-components/table-styles/table.styled";
import { StyledButton } from "../../../../../styled-components/button-styles/button.styled";
import { globalStyles } from "../../../../../styled-components/global-styles";
import UpdateAction from "../dashboard-admin-buttons/UpdateAction";
import DeleteAction from "../dashboard-admin-buttons/DeleteAction";

const deleteButtonBackgroundColor =
    globalStyles.light.alertButton.backgroundColor;
const deleteButtonColor = globalStyles.light.alertButton.color;

const infoButtonBackgroundColor = globalStyles.light.infoButton.backgroundColor;
const infoButtonColor = globalStyles.light.infoButton.color;

function Table(props) {
    const { data, handleAdd, handleUpdate, handleDelete, changeUpdateState } =
        props;

    const buttonHeader = ["Actions"];

    const calculateHeader = (data) => {
        let firstElement = data[0];
        let header = [];
        for (const property in firstElement) {
            header.push(property.toString());
        }
        return header;
    };

    const calculateData = (data) => {
        return data.map((row) => {
            return {
                ...row,
                Actions: (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <UpdateAction
                            id={row.id}
                            backgroundColor={infoButtonBackgroundColor}
                            color={infoButtonColor}
                            handleUpdate={changeUpdateState}
                        >
                            Update
                        </UpdateAction>
                        <DeleteAction
                            id={row.id}
                            backgroundColor={deleteButtonBackgroundColor}
                            color={deleteButtonColor}
                            handleDelete={handleDelete}
                        >
                            Delete
                        </DeleteAction>
                    </div>
                ),
            };
        });
    };

    const header = calculateHeader(data).concat(buttonHeader);

    const functionalData = calculateData(data);

    return (
        <StyledTable>
            <TableHeader header={header} />
            <TableBody header={header} data={functionalData} />
        </StyledTable>
    );
}

export default Table;
