import React from 'react';
import {StyledButton} from "../../styled-components/button-styles/button.styled";

import './ApiError.scss';

function ApiError(props) {

    const {err, refetch} = props;

    return (
        <div className="api-error-container">
            <h2>There Was Some Error.</h2>
            <h3>Error : {err}</h3>
            <StyledButton onClick={refetch}>Refetch</StyledButton>
        </div>
    );
}

export default ApiError;