import React, { PureComponent } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Verification from "../Verification/Verification";
import Setup from "../Setup/Setup";
import PasswordReset from "../PasswordReset/PasswordReset";
import ResetRequest from "../ResetRequest/ResetRequest";
import ChangePassword from "../ChangePassword/ChangePassword";
import Home from "../Home/Home";
import Friends from "../Friends/Friends";
import ChatRoom from "../ChatRoom/ChatRoom";
import Picture from "../Picture/Picture";
import Info from "../Info/Info";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={PasswordReset} />
          <ProtectedRoute path="/verification" component={Verification} redirectTo="/signup" token="isSignedUp" />
          <ProtectedRoute exact path="/setup" component={Setup} redirectTo="/signup" token="isVerified" />
          <ProtectedRoute exact path="/reset_request" component={ResetRequest} redirectTo="/reset" token="isRequest" />
          <ProtectedRoute exact path="/change_password" component={ChangePassword} redirectTo="/reset" token="isRequestVerified" />

          <Route exact path="/home" component={Home} />
          <Route exact path="/home/friends" component={Friends} />
          <Route exact path="/home/room" component={ChatRoom} />
          <Route exact path="/home/picture" component={Picture} />
          <Route exact path="/home/info" component={Info} />
          <Route component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
