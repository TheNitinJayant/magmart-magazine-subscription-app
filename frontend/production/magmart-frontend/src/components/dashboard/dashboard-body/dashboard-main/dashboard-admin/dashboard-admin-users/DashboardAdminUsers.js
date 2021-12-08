import React, { useEffect, useState } from "react";

import "./DashboardAdminUsers.scss";
import Table from "../dashboard-admin-tables/Table";

import { globalStyles } from "../../../../../styled-components/global-styles";

import { USERS } from "../../../../../../BackendRoutes";
import LoadingComponent from "../../../../../common/loading-component/LoadingComponent";
import ApiError from "../../../../../common/api-error/ApiError";
import AuthAxios from "../../../../../../authentication/AuthAxios";
import AddUser from "./add-user/AddUser";
import UpdateUser from "./update-user/UpdateUser";
import { StyledButton } from "../../../../../styled-components/button-styles/button.styled";
import axios from "axios";

function DashboardAdminUsers(props) {
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [toggleRefresh, setToggleRefresh] = useState(false);

    const [previousData, setPreviousData] = useState(null);

    useEffect(() => {
        console.log("use effect called");
        setApiLoading(true);
        setApiError(null);
        AuthAxios({
            method: "get",
            url: USERS,
        })
            .then((response) => {
                console.log(response.data);
                let newData = response.data.map((row) => {
                    return { ...row, id: row.user_id };
                });
                setApiData(newData);
                setApiError(null);
            })
            .catch((err) => {
                setApiError(err);
            })
            .finally(() => {
                setApiLoading(true);
                setTimeout(() => {
                    setApiLoading(false);
                }, 2000);
            });
    }, [toggleRefresh]);

    const changeUpdateState = (id) => {
        apiData.forEach((element) => {
            if (element.id == id) {
                setPreviousData(element);
            }
        });
        setIsUpdating(!isUpdating);
    };

    const changeAddState = () => {
        setIsAdding(!isAdding);
    };

    const handleAdd = (user) => {
        AuthAxios({
            method: "post",
            url: USERS,
            data: user,
        })
            .then((response) => {
                console.log("create user response is ", response);
                setIsAdding(!isAdding);
                setToggleRefresh(!toggleRefresh);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        AuthAxios({
            method: "delete",
            url: `${USERS}/${id}`,
        })
            .then((response) => {
                console.log("Deleted User ", response);
                setToggleRefresh(!toggleRefresh);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdate = (user) => {
        AuthAxios({
            method: "put",
            url: `${USERS}`,
            data: user,
        })
            .then((response) => {
                console.log("updated user ", response);
                setIsUpdating(!isUpdating);
                setToggleRefresh(!toggleRefresh);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const render = () => {
        if (isAdding) {
            return <AddUser handleAdd={handleAdd} />;
        }

        if (isUpdating) {
            return (
                <UpdateUser
                    previousData={previousData}
                    handleUpdate={handleUpdate}
                />
            );
        }

        if (apiError) {
            return <ApiError err={apiError.toString()} />;
        } else if (apiLoading) {
            return <LoadingComponent />;
        } else if (!apiLoading && !apiError) {
            return (
                <>
                    <Table
                        handleAdd={handleAdd}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        changeUpdateState={changeUpdateState}
                        data={apiData}
                    />
                    <StyledButton onClick={changeAddState}>
                        Add User
                    </StyledButton>
                </>
            );
        }
        return <LoadingComponent />;
    };

    return <div className="dashboard-admin-users-container">{render()}</div>;
}

export default DashboardAdminUsers;
