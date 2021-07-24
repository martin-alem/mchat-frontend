import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import SignupController from "../../controller/SignupController";
import ErrorHandler from "../../util/ErrorHandler";
import Storage from "../../util/Storage";
import logo from "../../img/logo.png";

import "./Signup.css";

class Signup extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validatePhoneInput = this.validatePhoneInput.bind(this);
    }

    handleChange(event) {
        this.setState({ phone: event.target.value });
    }

    /**
     * Submits the signup form
     * @param {HTMLEvent} event Holds information about the event that occurred
     */
    handleSubmit(event) {
        event.preventDefault();
        const btn = document.querySelector(".btn-primary");

        if (this.validatePhoneInput()) {
            const { phone } = this.state;
            btn.classList.toggle("btn-loading");
            btn.disabled = true;

            SignupController.signup(phone)
                .then(response => {
                    if (response["response"]["error"] === null) {
                        this.setState({ phone: "" });
                        event.target.reset();
                        Storage.SSet("authentication", JSON.stringify({ isSignedUp: true }));
                        Storage.SSet("credentials", JSON.stringify({ phone }));
                        this.props.history.push(`/verification?phone=${phone}&auth=true`);
                    }
                    else {
                        ErrorHandler.errorHandler(response["response"]["error"], 6000, ".error-message");
                    }
                })
                .catch(() => {
                    ErrorHandler.errorHandler("Server not responding", 6000, ".error-message");
                })
                .finally(() => {
                    btn.classList.toggle("btn-loading");
                    btn.disabled = false;
                });
        }
    }

    /**
     * Validates a phone number.
     * @returns A boolean indicating the result of validation.
     */
    validatePhoneInput() {
        let result = true;

        // make sure input is not empty
        if (!this.state.phone) {
            ErrorHandler.errorHandler("Please enter a phone number", 3000, ".error-message");
            result = false;
        }

        else if (!/^[0-9]+$/gm.test(this.state.phone)) {
            ErrorHandler.errorHandler("Only numeric characters are allowed", 3000, ".error-message");
            result = false;
        }

        else if (this.state.phone.length !== 10) {
            ErrorHandler.errorHandler("10 digits US phone number allowed", 3000, ".error-message");
            result = false;
        }

        else {
            ErrorHandler.errorHandler("", 0, ".error-message");
        }

        return result;
    }

    render() {
        return (
            <div className="Signup">
                <div className="Signup-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="Signup-title">Create New Account</h1>
                <div className="Signup-error">
                    <span className="error-message hide" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="tel" value={this.state.phone} placeholder="10 digits phone number" name="phone" className="Signup-input" onChange={this.handleChange} />
                    <div className="Signup-button">
                        <button type="submit" className="btn-primary">
                            <span className="btn-text">Create Account</span>
                        </button>
                    </div>
                </form>
                <div className="Signup-info">
                    <p className="info">
                        Already have an account?
                        <Link to="/"> Login Here </Link>
                    </p>
                </div>
            </div>

        );
    }
}

export default Signup;
