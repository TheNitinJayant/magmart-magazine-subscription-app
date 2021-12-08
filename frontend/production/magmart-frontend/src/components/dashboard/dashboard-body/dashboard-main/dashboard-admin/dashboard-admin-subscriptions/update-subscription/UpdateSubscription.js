import React from "react";
import { useState } from "react";
import { StyledButton } from "../../../../../../styled-components/button-styles/button.styled";

import { StyledFormInput } from "../../../../../../styled-components/form-styles/form-input.styled";

export default function UpdateSubscription(props) {
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
        <div className="update-subscription-container">
            <h3>ID: {data.id}</h3>
            <h3>Magazine ID: </h3>
            <StyledFormInput
                value={data.mag_id}
                onChange={handleChange}
                name="mag_id"
            />
            <h3>Subscription Time: </h3>
            <StyledFormInput
                value={data.sub_time}
                onChange={handleChange}
                name="sub_time"
            />
            <h3>Price: </h3>
            <StyledFormInput
                value={data.price}
                onChange={handleChange}
                name="price"
            />
            <div>
                <StyledButton onClick={handleClick}>Update</StyledButton>
            </div>
        </div>
    );
}
