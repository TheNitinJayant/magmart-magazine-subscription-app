import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";
import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

export default function AddMagazine(props) {
    const { handleAdd } = props;

    const [data, setData] = useState({
        mag_name: "",
        pub_id: "",
        genre: "",
        image: "",
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        handleAdd(data);
    };

    return (
        <div className="update-magazines-container">
            <h3>Name: </h3>
            <StyledFormInput onChange={handleChange} name="mag_name" />
            <h3>Publisher ID: </h3>
            <StyledFormInput onChange={handleChange} name="pub_id" />
            <h3>Genre: </h3>
            <StyledFormInput onChange={handleChange} name="genre" />
            <h3>Image Link: </h3>
            <StyledFormInput onChange={handleChange} name="image" />
            <div>
                <StyledButton onClick={handleSubmit}>Add</StyledButton>
            </div>
        </div>
    );
}
