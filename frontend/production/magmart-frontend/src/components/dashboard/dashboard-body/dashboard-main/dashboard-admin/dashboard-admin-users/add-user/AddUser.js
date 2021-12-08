import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";
import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

import "./AddUser.scss";

export default function AddUser(props) {
    const { handleAdd } = props;

    const [userData, setUserData] = useState({
        fullname: "",
        user_role: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        handleAdd(userData);
    };

    return (
        <div className="update-user-container">
            <h3>Name: </h3>
            <StyledFormInput onChange={handleChange} name="fullname" />
            <h3>Role: </h3>
            <StyledFormInput onChange={handleChange} name="user_role" />
            <h3>Email: </h3>
            <StyledFormInput onChange={handleChange} name="email" />
            <h3>Password: </h3>
            <StyledFormInput onChange={handleChange} name="password" />
            <div>
                <StyledButton onClick={handleSubmit}>Add</StyledButton>
            </div>
        </div>
    );
}
