import React, { PureComponent } from "react";
import Storage from "../../util/Storage";
import ChangePasswordController from "../../controller/ChangePasswordController";
import ErrorHandler from "../../util/ErrorHandler";
import logo from "../../img/logo.png";
import "./ChangePassword.css";

class ChangePassword extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const btn = document.querySelector(".btn-primary");

        if (this.validateInput()) {
            const { password } = this.state;
            const phone = Storage.SGet("credentials")["phone"];
            btn.classList.toggle("btn-loading");
            btn.disabled = true;

            ChangePasswordController.changePassword(password, phone)
                .then(response => {
                    if (response["response"]["error"] === null) {
                        this.setState({ password: "" });
                        this.setState({ confirmPassword: "" });
                        event.target.reset();
                        Storage.SRemove("authentication");
                    }
                })
                .catch(error => {
                    ErrorHandler.errorHandler("Server not responding", 6000, ".error-message");
                    console.error(error);
                })
                .finally(() => {
                    btn.classList.toggle("btn-loading");
                    btn.disabled = false;
                })
        }
    }

    validateInput() {
        let result = true;

        if (!this.state.password || !this.state.confirmPassword) {
            ErrorHandler.errorHandler("Please provide all fields", 3000, ".error-message");
            result = false;
        }

        else if (!this.validPassword()) {
            ErrorHandler.errorHandler("Invalid Password", 3000, ".error-message");
            result = false;
        }

        else if (this.state.password !== this.state.confirmPassword) {
            ErrorHandler.errorHandler("Passwords do not match", 3000, ".error-message");
            result = false;
        }

        else {
            ErrorHandler.errorHandler("", 6000, ".error-message");
        }

        return result;
    }

    /**
 * Validates a password to make sure it contains
 * characters, capital letters and numbers and must be between 6 and 30 characters.
 * @returns A boolean indicating the result of validation.
 */
    validPassword() {

        const ch = [
            ["!", 1],
            ["@", 2],
            ["#", 3],
            ["$", 4],
            ["%", 5],
            ["^", 6],
            ["&", 7],
            ["*", 8],
            ["(", 9],
            [")", 10],
            ["-", 11],
            ["_", 12],
            ["=", 13],
            ["+", 14],
        ];
        const validCharacters = new Map(ch);
        let characters = false;
        let numbers = false;
        let capLetters = false;
        let length = false;
        const { password } = this.state;

        if ((password.length >= 6 && password.length <= 30)) {
            length = true;
            for (let i = 0; i < password.length; i += 1) {

                if (!characters && validCharacters.has(password[i])) {
                    characters = true;
                }
                if (!numbers && (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)) {
                    numbers = true;
                }
                if (!capLetters && (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)) {
                    capLetters = true;
                }
            }
        }

        return (characters && numbers && capLetters && length);
    }

    render() {
        return (
            <div className="ChangePassword">
                <div className="ChangePassword-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="ChangePassword-title">Change Password</h1>
                <div className="ChangePassword-error">
                    <span className="error-message hide" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="password" value={this.state.password} placeholder="New Password" name="password" className="ChangePassword-input" onChange={this.handleChange} />
                    <input type="password" value={this.state.confirmPassword} placeholder="Confirm Password" name="confirmPassword" className="ChangePassword-input" onChange={this.handleChange} />
                    <div className="ChangePassword-button">
                        <button type="submit" className="btn-primary">
                            <span className="btn-text">Reset Password</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChangePassword;
