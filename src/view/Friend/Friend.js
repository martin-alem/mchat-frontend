import React, { PureComponent } from 'react';
import avatar from "../../img/avatar.jpg";
import "./Friend.css";

class Friend extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Friend">
                <div className="Container">
                    <div className="InnerContainer">
                        <div className="Image">
                            <img src={avatar} alt="User image" className="Avatar" />
                        </div>
                        <div className="Title">
                            <h3>Adjyannah West</h3>
                            <p>I am using mChat</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Friend;