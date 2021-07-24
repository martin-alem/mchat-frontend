import React, { PureComponent } from "react";
import { Redirect, Route } from "react-router-dom";
import Storage from "../util/Storage";

class ProtectedRoute extends PureComponent {
    render() {
        const {
            component: Component, redirectTo, token, path,
        } = this.props;
        const auth = Storage.SGet("authentication") ? Storage.SGet("authentication") : {};
        return auth[token] ? (
            <Route exact path={path} component={Component} />
        ) : (
            <Redirect to={{ pathname: redirectTo }} />
        );
    }
}

export default ProtectedRoute;
