import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Friend from "../Friend/Friend";
import SearchForm from "../SearchForm/SearchForm";
import "./Friends.css"

class Friends extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Friends">
                <div className="Header">
                    <p className="Edit"><Link to="/home">Cancel</Link></p>
                </div>
                <div className="Heading">
                    <h1>Friends</h1>
                </div>
                <div className="SearchForm">
                    <SearchForm />
                </div>
                <hr />
                <div className="FriendList">
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
            </div>
        )
    }
}

export default Friends