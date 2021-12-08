import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";
import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

export default function AddSubscription(props) {
    const { handleAdd } = props;

    const [data, setData] = useState({
        mag_id: "",
        sub_time: "",
        price: "",
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
        <div className="update-subscription-container">
            <h3>Magazine ID: </h3>
            <StyledFormInput onChange={handleChange} name="mag_id" />
            <h3>Time: </h3>
            <StyledFormInput onChange={handleChange} name="sub_time" />
            <h3>Price: </h3>
            <StyledFormInput onChange={handleChange} name="price" />
            <div>
                <StyledButton onClick={handleSubmit}>Add</StyledButton>
            </div>
        </div>
    );
}
