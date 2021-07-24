import React, { PureComponent } from "react";
import Storage from "../../util/Storage";
import PasswordResetController from "../../controller/PasswordResetController";
import ErrorHandler from "../../util/ErrorHandler";
import logo from "../../img/logo.png";
import "./PasswordReset.css";

class PasswordReset extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            phone: ""
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
            const { phone } = this.state;
            btn.classList.toggle("btn-loading");
            btn.disabled = true;

            PasswordResetController.passwordReset(phone)
                .then(response => {

                    if (response["response"]["error"] === null) {
                        this.setState({ phone: "" });
                        event.target.reset();
                        Storage.SSet("authentication", JSON.stringify({ isRequest: true }));
                        Storage.SSet("credentials", JSON.stringify({ phone }));
                        this.props.history.push(`/reset_request?phone=${phone}&auth=true`);
                    }
                    else {
                        ErrorHandler.errorHandler(response["response"]["error"], 6000, ".error-message");
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

        if (!this.state.phone) {
            ErrorHandler.errorHandler("Please enter a phone number", 3000, ".error-message");
            result = false;
        }
        else {
            ErrorHandler.errorHandler("", 0, ".error-message");
        }

        return result;
    }

    render() {
        return (
            <div className="PasswordReset">
                <div className="PasswordReset-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="PasswordReset-title">Password Reset</h1>
                <div className="PasswordReset-error">
                    <span className="error-message hide" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="tel" value={this.state.phone} placeholder="10 digits phone number" name="phone" className="PasswordReset-input" onChange={this.handleChange} />
                    <div className="PasswordReset-button">
                        <button type="submit" className="btn-primary">
                            <span className="btn-text">Password Reset</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PasswordReset;
