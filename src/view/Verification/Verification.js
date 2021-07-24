import React, { PureComponent } from "react";
import Storage from "../../util/Storage";
import logo from "../../img/logo.png";
import VerificationController from "../../controller/VerificationController";
import ErrorHandler from "../../util/ErrorHandler";
import FeedbackHandler from "../../util/FeedbackHandler";
import "./Verification.css";

class Verification extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateCodeInput = this.validateCodeInput.bind(this);
        this.handleResend = this.handleResend.bind(this);
    }

    /**
     * Handles form change events
     * @param {Event} event
     */
    handleChange(event) {
        this.setState({ code: event.target.value });
    }

    /**
     * Submits the Verification form
     * @param {Event} event Holds information about the event that occurred
     */
    handleSubmit(event) {
        event.preventDefault();
        const btn = document.querySelector(".btn-primary");

        if (this.validateCodeInput()) {
            const { code } = this.state;
            btn.classList.toggle("btn-loading");
            btn.disabled = true;

            VerificationController.verify(Storage.SGet("credentials")["phone"], code)
                .then(response => {
                    if (response["response"]["error"] === null) {
                        this.setState({ code: "" });
                        Storage.SSet("authentication", JSON.stringify({ isVerified: true }));
                        this.props.history.push(`/setup?phone=${this.props.history.phone}&verified=true`);
                        event.target.reset();
                    } else {
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

    handleResend() {

        FeedbackHandler.feedback("Please wait... resending code", ".resend-feedback", ".info");
        VerificationController.resend(Storage.SGet("credentials")["phone"])
            .then(response => {
                if (response["response"]["error"] === null) {
                    console.log("verification code resent");
                }
                else {
                    ErrorHandler.errorHandler(response["response"]["error"], 6000, ".error-message");
                }
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                FeedbackHandler.done(".resend-feedback", ".info");
            })

    }

    /**
 * Validates a code.
 * @returns A boolean indicating the result of validation.
 */
    validateCodeInput() {
        let result = true;

        // make sure input is not empty
        if (!this.state.code) {
            ErrorHandler.errorHandler("Please enter verification code", 3000, ".error-message");
            result = false;
        }

        else {
            ErrorHandler.errorHandler("", 0, ".error-message");
        }

        return result;
    }

    render() {
        return (
            <div className="Verification">
                <div className="Verification-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="Verification-title">Verify Your Phone Number</h1>
                <p className="Verification-message">
                    Please enter the code sent to ******
                    {Storage.SGet("credentials").phone.slice(6)}
                </p>
                <div className="Verification-error">
                    <span className="error-message hide" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.code} placeholder="Code" name="code" className="Verification-input" onChange={this.handleChange} />
                    <div className="Verification-button">
                        <button type="submit" className="btn-primary">
                            <span className="btn-text">Verify Phone Number</span>
                        </button>
                    </div>
                </form>
                <div className="Verification-info">
                    <p className="info">
                        Did not get the code?
                        <b id="resend" onClick={this.handleResend} role="none">Resend</b>
                    </p>
                    <p className="resend-feedback"></p>
                </div>
            </div>

        );
    }
}

export default Verification;
