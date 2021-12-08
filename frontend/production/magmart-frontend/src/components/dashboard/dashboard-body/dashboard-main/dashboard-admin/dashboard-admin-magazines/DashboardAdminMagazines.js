import React, { useEffect, useState } from "react";

import "./DashboardAdminMagazines.scss";
import Table from "../dashboard-admin-tables/Table";

import { MAGAZINES } from "../../../../../../BackendRoutes";
import LoadingComponent from "../../../../../common/loading-component/LoadingComponent";
import ApiError from "../../../../../common/api-error/ApiError";
import AuthAxios from "../../../../../../authentication/AuthAxios";

import { StyledButton } from "../../../../../styled-components/button-styles/button.styled";
import AddMagazine from "./add-magazine/AddMagazine";
import UpdateMagazine from "./update-magazine/UpdateMagazine";

function DashboardAdminMagazines(props) {
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
            url: MAGAZINES,
        })
            .then((response) => {
                // console.log(response.data);
                let newData = response.data.map((row) => {
                    return {
                        id: row.mag_id,
                        mag_id: row.mag_id,
                        mag_name: row.mag_name,
                        genre: row.mag_name,
                        image: row.image,
                        publisher: row.publisher.pub_name,
                    };
                });
                console.log("modified mag data ", newData);
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
            url: MAGAZINES,
            data: user,
        })
            .then((response) => {
                console.log("create magazine response is ", response);
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
            url: `${MAGAZINES}/${id}`,
        })
            .then((response) => {
                console.log("Deleted magazine ", response);
                setToggleRefresh(!toggleRefresh);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdate = (user) => {
        AuthAxios({
            method: "put",
            url: MAGAZINES,
            data: user,
        })
            .then((response) => {
                console.log("updated magazine ", response);
                setIsUpdating(!isUpdating);
                setToggleRefresh(!toggleRefresh);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const render = () => {
        if (isAdding) {
            return <AddMagazine handleAdd={handleAdd} />;
        }

        if (isUpdating) {
            return (
                <UpdateMagazine
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
                        Add Magazine
                    </StyledButton>
                </>
            );
        }
        return <LoadingComponent />;
    };

    return (
        <div className="dashboard-admin-magazines-container">{render()}</div>
    );
}

export default DashboardAdminMagazines;
