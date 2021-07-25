import React, { PureComponent } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Chat from '../Chat/Chat';
import "./Home.css";

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <div className="Header">
                    <p className="Edit"><i className="fas fa-edit"></i></p>
                    <p className="NewChat"><i className="fas fa-comment-medical"></i></p>
                </div>
                <div className="Heading">
                    <h1>Chats</h1>
                </div>
                <div className="SearchForm">
                    <SearchForm />
                </div>
                <hr />
                <div className="Chats">
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                </div>
                <div className="Nav">
                    <p className="camera"><i className="fas fa-camera"></i></p>
                    <p className="Chat-Room"><i className="fas fa-comment-alt"></i></p>
                    <p className="Phone-Log"><i className="fas fa-phone-alt"></i></p>
                    <p className="Settings"><i className="fas fa-cog"></i></p>
                </div>
            </div>
        )
    }
}

export default Home