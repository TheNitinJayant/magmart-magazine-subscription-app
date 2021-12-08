import React, { useState } from "react";
import { StyledFormInput } from "../../components/styled-components/form-styles/form-input.styled";
import { StyledSubmitButton } from "../../components/styled-components/form-styles/form-submit-button.styled";

import SingInImage from "../../resources/sign-in.svg";

import "./SignInPage.scss";
import axios from "axios";
import { SIGN_IN } from "../../BackendRoutes";
import StatusCodes from "../../StatusCodes";
import { StyledFormAlertText } from "../../components/styled-components/form-styles/form-alert-text.styled";
import { StyledLoadingButton } from "../../components/styled-components/form-styles/form-loading-button.styled";
import { StyledButton } from "../../components/styled-components/button-styles/button.styled";
import { useHistory } from "react-router";

import { redirectTo } from "../../utility/redirect";

const successColor = "#54b9c6";
const alertColor = "red";

function SignInPage(props) {
    const history = useHistory();

    const { loginController } = props;

    const progressFlags = {
        EMPTY: 0,
        LOADING: 1,
        SUCCESSFUL: 2,
        FAILED: -1,
    };

    const [emailData, setEmailData] = useState({
        email: "",
        inputColor: "white",
    });
    const [passwordData, setPasswordData] = useState({
        password: "",
        inputColor: "white",
    });

    const [progress, setProgress] = useState(progressFlags.EMPTY);
    const [signInAlertText, setSignInAlertText] = useState({
        text: null,
        color: "green",
    });

    const isEmailValid = (email) => {
        let emailToTest = email;

        var atSymbol = emailToTest.indexOf("@");
        if (atSymbol < 1) return false;

        var dot = emailToTest.indexOf(".");
        if (dot <= atSymbol + 2) return false;

        if (dot === emailToTest.length - 1) return false;

        return true;
    };

    const isPasswordValid = (password) => {
        if (password.length >= 8) {
            return true;
        }
        return false;
    };

    const isEverythingValid = () => {
        if (
            isEmailValid(emailData.email) &&
            isPasswordValid(passwordData.password)
        ) {
            return true;
        }
        return false;
    };

    const handleEmail = (event) => {
        let email = event.target.value;
        let color = "white";
        let alertText = "";

        if (!isEmailValid(email)) {
            color = alertColor;
            alertText = "Please Enter a correct email";
        } else {
            color = successColor;
            alertText = "You have an excellent email!";
        }
        setEmailData({ email: email, inputColor: color });
    };

    const handlePassword = (event) => {
        let password = event.target.value;
        let color = "white";
        let alertText = "";

        if (!isPasswordValid(password)) {
            color = alertColor;
            alertText = "Please Enter a correct email";
        } else {
            color = successColor;
            alertText = "You have an excellent email!";
        }
        setPasswordData({ password: password, inputColor: color });
    };

    const signin = () => {
        if (isEverythingValid()) {
            setProgress(progressFlags.LOADING);

            const signInData = {
                email: emailData.email,
                password: passwordData.password,
            };

            axios
                .post(SIGN_IN, signInData)
                .then((response) => {
                    console.log(response);
                    const { data, status, headers } = response;
                    if (status == StatusCodes.SUCCESS) {
                        setProgress(progressFlags.SUCCESSFUL);
                        // const authHeader = headers.authorization;
                        // const token = authHeader.split(" ")[1];
                        const token = data.jwt;
                        const user = data.user;
                        const cart = data.cart;

                        loginController(user, token, cart);
                    }
                    if (status == StatusCodes.FORBIDDEN) {
                        setProgress(progressFlags.FAILED);
                        setSignInAlertText({
                            text: data.message,
                            color: alertColor,
                        });
                    } else {
                        setProgress(progressFlags.FAILED);
                        setSignInAlertText({
                            text: data.message,
                            color: alertColor,
                        });
                    }
                })
                .catch((err) => {
                    setProgress(progressFlags.FAILED);
                    setSignInAlertText({
                        text: "Something was wrong",
                        color: alertColor,
                    });
                });
        }
    };

    const handleSubmit = () => {
        setTimeout(signin, 1000);
    };

    const signInAlert = () => {
        let render =
            signInAlertText.text !== "" ? (
                <StyledFormAlertText color={signInAlertText.color}>
                    {signInAlertText.text}
                </StyledFormAlertText>
            ) : null;
        return render;
    };

    const handleBack = () => {
        redirectTo(history, "/");
    };

    const button = () => {
        let signInButton = (
            <StyledSubmitButton onClick={handleSubmit}>
                Sign In
            </StyledSubmitButton>
        );
        let loadingButton = <StyledLoadingButton></StyledLoadingButton>;
        let successButon = <StyledLoadingButton></StyledLoadingButton>;
        let render = null;
        if (
            progress == progressFlags.EMPTY ||
            progress == progressFlags.FAILED
        ) {
            render = signInButton;
        }
        if (progress == progressFlags.LOADING) {
            render = loadingButton;
        }
        if (progress == progressFlags.SUCCESSFUL) {
            render = successButon;
        }
        return render;
    };

    return (
        <div className="sign-in-page-container">
            <div className="sign-in-form-container">
                <div style={{ width: "100%", alignItems: "left" }}>
                    <StyledButton onClick={handleBack}>{"<"}</StyledButton>
                </div>
                <div className="brand">
                    <span className="brand-name">MagMart</span>
                </div>

                <div className="sign-in-form-container-text">
                    <h1>Track Your Magazines.</h1>
                    <h3>Login To MagMart</h3>
                </div>

                <div className="sign-in-form-container-inputs">
                    <h4>Email</h4>
                    <StyledFormInput
                        onChange={handleEmail}
                        value={emailData.email}
                        bgColor={emailData.inputColor}
                    />
                    <h4>Password</h4>
                    <StyledFormInput
                        type="password"
                        onChange={handlePassword}
                        value={passwordData.password}
                        bgColor={passwordData.inputColor}
                    />
                    {button()}
                    {signInAlert()}
                </div>
            </div>
            <div className="sign-in-image-container">
                <img className="sign-in-image" src={SingInImage} />
            </div>
        </div>
    );
}

export default SignInPage;
