import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import Storage from "../../util/Storage";
import LoginController from "../../controller/LoginController";
import ErrorHandler from "../../util/ErrorHandler";
import "./Login.css";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
            password: "",
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
            const { phone, password } = this.state;

            btn.classList.toggle("btn-loading");
            btn.disabled = true;

            LoginController.login(phone, password)
                .then(response => {

                    if (response["response"]["error"] === null) {
                        this.setState({ phone: "" });
                        this.setState({ password: "" });
                        event.target.reset();
                        Storage.SSet("credentials", JSON.stringify({ phone: phone }));
                        //redirect to home page
                        console.log(response);
                    }
                    else {
                        ErrorHandler.errorHandler(response["response"]["error"], 6000, ".error-message");
                    }
                })
                .catch((error) => {
                    ErrorHandler.errorHandler("Server not responding", 6000, ".error-message");
                    console.error(error);
                })
                .finally(() => {
                    btn.classList.toggle("btn-loading");
                    btn.disabled = false;
                });
        }
    }

    validateInput() {
        let result = true;

        if (!this.state.phone || !this.state.password) {
            ErrorHandler.errorHandler("Please provide a phone number and password", 3000, ".error-message");
            result = false;
        }
        else {
            ErrorHandler.errorHandler("", 0, ".error-message");
        }
        return result;
    }

    render() {
        return (
            <div className="Login">
                <div className="Login-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="Login-title">Welcome</h1>
                <div className="Login-error">
                    <span className="error-message hide" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="tel" value={this.state.phone} placeholder="10 digits US phone number" name="phone" className="Login-input" onChange={this.handleChange} />
                    <input type="password" value={this.state.password} placeholder="Your password" name="password" className="Login-input" onChange={this.handleChange} />
                    <div className="Login-button">
                        <button type="submit" className="btn-primary">
                            <span className="btn-text">Login</span>
                        </button>
                    </div>
                </form>
                <div className="Login-info">
                    <p className="info">
                        Forgot Your Password?
                        <Link to="/reset"> Reset Here </Link>
                    </p>
                    <p className="info">
                        Need An Account?
                        <Link to="/signup"> Create Here </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;
