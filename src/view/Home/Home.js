import React, { PureComponent } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Chat from '../Chat/Chat';
import "./Home.css";

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
        }

        this.handleEdit = this.handleEdit.bind(this);
    }

    noStyle = {};

    handleEdit(event) {
        event.preventDefault();
        const editNav = document.querySelector(".EditNav");
        const nav = document.querySelector(".Nav");
        const newChat = document.querySelector(".NewChat");
        if (this.state.edit) {
            this.setState({ edit: false });
            nav.classList.remove("hide");
            newChat.classList.remove("hide");
            editNav.classList.add("hide");


        }
        else {
            this.setState({ edit: true });
            nav.classList.add("hide");
            newChat.classList.add("hide");
            editNav.classList.remove("hide");
        }

    }

    render() {
        return (
            <div className="Home">
                <div className="Header">
                    <p onClick={this.handleEdit} className="Edit"><i className="fas fa-edit"></i></p>
                    <p className="NewChat"><i className="fas fa-comment-medical"></i></p>
                </div>
                <div className="Heading">
                    <h1>Chats</h1>
                </div>
                <div className="SearchForm">
                    <SearchForm />
                </div>
                <div className="EditNav hide">
                    <p className="delete">Delete</p>
                    <p className="archive">Archive</p>
                    <p className="read">Read</p>
                </div>
                <hr />
                <div className="Chats">
                    <Chat edit={this.state.edit} />
                    <Chat edit={this.state.edit} />
                    <Chat edit={this.state.edit} />
                    <Chat edit={this.state.edit} />
                    <Chat edit={this.state.edit} />
                    <Chat edit={this.state.edit} />
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