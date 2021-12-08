import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";

import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

import "./UpdateUser.scss";

export default function UpdateUser(props) {
    const { handleUpdate, previousData } = props;

    const [userData, setUserData] = useState(previousData);

    const handleChange = (event) => {
        // console.log(userData);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        handleUpdate(userData);
    };

    return (
        <div className="update-user-container">
            <h3>ID: {userData.user_id}</h3>
            <h3>Name: </h3>
            <StyledFormInput
                value={userData.fullname}
                onChange={handleChange}
                name="fullname"
            />
            <h3>Role: </h3>
            <StyledFormInput
                value={userData.user_role}
                onChange={handleChange}
                name="user_role"
            />
            <h3>Email: </h3>
            <StyledFormInput
                value={userData.email}
                onChange={handleChange}
                name="email"
            />
            <h3>Password: </h3>
            <StyledFormInput
                value={userData.password}
                onChange={handleChange}
                name="password"
            />
            <div>
                <StyledButton onClick={handleClick}>Update</StyledButton>
            </div>
        </div>
    );
}
