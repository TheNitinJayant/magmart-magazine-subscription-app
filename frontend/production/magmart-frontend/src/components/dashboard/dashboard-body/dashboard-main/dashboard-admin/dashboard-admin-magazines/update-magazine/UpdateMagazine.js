import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";

import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

export default function UpdateMagazine(props) {
    const { handleUpdate, previousData } = props;

    const [data, setData] = useState(previousData);

    const handleChange = (event) => {
        // console.log(userData);
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        handleUpdate(data);
    };

    return (
        <div className="update-user-container">
            <h3>ID: {data.user_id}</h3>
            <h3>Name: </h3>
            <StyledFormInput
                value={data.mag_name}
                onChange={handleChange}
                name="mag_name"
            />
            <h3>Publisher ID: </h3>
            <StyledFormInput
                value={data.pub_id}
                onChange={handleChange}
                name="pub_id"
            />
            <h3>Genre: </h3>
            <StyledFormInput
                value={data.genre}
                onChange={handleChange}
                name="genre"
            />
            <h3>Image: </h3>
            <StyledFormInput
                value={data.image}
                onChange={handleChange}
                name="image"
            />
            <div>
                <StyledButton onClick={handleClick}>Update</StyledButton>
            </div>
        </div>
    );
}
