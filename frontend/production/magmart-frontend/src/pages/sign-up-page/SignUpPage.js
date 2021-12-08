import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import { StyledFormInput } from "../../components/styled-components/form-styles/form-input.styled";
import { StyledSubmitButton } from "../../components/styled-components/form-styles/form-submit-button.styled";

import SingUpImage from "../../resources/sign-up.svg";
import StatusCodes from "../../StatusCodes";

import "./SignUpPage.scss";

import { SIGN_UP } from "../../BackendRoutes";
import { StyledLoadingButton } from "../../components/styled-components/form-styles/form-loading-button.styled";
import { StyledFormAlertText } from "../../components/styled-components/form-styles/form-alert-text.styled";

import { redirectTo } from "../../utility/redirect";
import { StyledButton } from "../../components/styled-components/button-styles/button.styled";

const successColor = "#54b9c6";
const alertColor = "red";

export default function SignUpPage() {
    const history = useHistory();

    const progressFlags = {
        EMPTY: 0,
        LOADING: 1,
        SUCCESSFUL: 2,
        FAILED: -1,
    };

    const [nameData, setNameData] = useState({ name: "", inputColor: "white" });
    const [emailData, setEmailData] = useState({
        email: "",
        inputColor: "white",
    });
    const [passwordData, setPasswordData] = useState({
        password: "",
        inputColor: "white",
    });
    const [progress, setProgress] = useState(progressFlags.EMPTY);
    const [signUpAlertText, setSignUpAlertText] = useState({
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

    const isNameValid = (name) => {
        if (name.length <= 0) {
            return false;
        }
        return true;
    };

    const handleName = (event) => {
        let name = event.target.value;

        let color = "white";
        let alertText = "";

        if (!isNameValid(name)) {
            color = alertColor;
            alertText = "Please Enter a Name";
        } else {
            color = successColor;
            alertText = "What a fantastic Name!";
        }

        setNameData({ name: name, inputColor: color });
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

    const isEverythingValid = () => {
        if (
            isEmailValid(emailData.email) &&
            isPasswordValid(passwordData.password) &&
            isNameValid(nameData.name)
        ) {
            return true;
        }
        return false;
    };

    const signup = () => {
        if (isEverythingValid()) {
            const signUpData = {
                fullname: nameData.name,
                email: emailData.email,
                password: passwordData.password,
            };

            axios
                .post(SIGN_UP, signUpData)
                .then((response) => {
                    const { data, status } = response;
                    if (status == StatusCodes.SUCCESS) {
                        setSignUpAlertText({
                            text: "You Are Good To Go",
                            color: successColor,
                        });
                        setProgress(progressFlags.SUCCESSFUL);
                    }
                    if (status == StatusCodes.CONFLICT) {
                        setSignUpAlertText({
                            text: data
                                ? data.error
                                : "User already Exists, Please Try Again",
                            color: alertColor,
                        });
                        setProgress(progressFlags.FAILED);
                    }
                })
                .catch((err) => {
                    setSignUpAlertText({
                        text: "There was some error",
                        color: alertColor,
                    });
                    setProgress(progressFlags.FAILED);
                    console.log(err);
                });
        }
    };

    const redirectToSignInPage = () => {
        const redirect = () => {
            history.push("/signin");
        };
        setTimeout(redirect, 500);
    };

    const handleSubmit = (event) => {
        setProgress(progressFlags.LOADING);
        setTimeout(signup, 2000);
    };

    const button = () => {
        let signUpButton = (
            <StyledSubmitButton onClick={handleSubmit}>
                Sign Up
            </StyledSubmitButton>
        );
        let loadingButton = <StyledLoadingButton></StyledLoadingButton>;
        let successButon = (
            <StyledSubmitButton onClick={redirectToSignInPage}>
                Login Your Account
            </StyledSubmitButton>
        );
        let render = null;
        if (
            progress == progressFlags.EMPTY ||
            progress == progressFlags.FAILED
        ) {
            render = signUpButton;
        }
        if (progress == progressFlags.LOADING) {
            render = loadingButton;
        }
        if (progress == progressFlags.SUCCESSFUL) {
            render = successButon;
        }
        return render;
    };

    const signUpAlert = () => {
        let render =
            signUpAlertText.text !== "" ? (
                <StyledFormAlertText color={signUpAlertText.color}>
                    {signUpAlertText.text}
                </StyledFormAlertText>
            ) : null;
        return render;
    };

    const handleBack = () => {
        redirectTo(history, "/");
    };

    return (
        <div className="sign-up-page-container">
            <div className="sign-up-form-container">
                <div style={{ width: "100%", alignItems: "left" }}>
                    <StyledButton onClick={handleBack}>{"<"}</StyledButton>
                </div>
                <div className="brand">
                    <span className="brand-name">MagMart</span>
                </div>

                <div className="sign-up-form-container-text">
                    <h1>Start getting the knowledge.</h1>
                    <h3>SignUp To MagMart</h3>
                </div>

                <div className="sign-up-form-container-inputs">
                    <h4>Name</h4>
                    <StyledFormInput
                        onChange={handleName}
                        value={nameData.name}
                        bgColor={nameData.inputColor}
                    />
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
                    {signUpAlert()}
                </div>
            </div>
            <div className="sign-up-image-container">
                <img className="sign-up-image" src={SingUpImage} />
            </div>
        </div>
    );
}
