import React, { PureComponent } from 'react';
import "./ChatBox.css";

class ChatBox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            query: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOpenOptions = this.handleOpenOptions.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        let character = event.target.value;
        this.setState({ [event.target.name]: character });

        /**
         * The value of this.state.query will be passed to the function handling searching.
         */

    }

    handleOpenOptions() {
        this.props.openModal();
    }

    render() {
        return (
            <div className="ChatBox">
                <form onSubmit={this.handleSubmit}>
                    <div className="Chat">
                        <i onClick={this.handleOpenOptions} className="fas fa-plus"></i>
                        <div className="Input">
                            <textarea value={this.state.query} name="query" className="ChatBox-input" onChange={this.handleChange} ></textarea>
                            <i className="far fa-laugh"></i>
                        </div>
                        <i className="fas fa-paper-plane"></i>
                        <i className="fas fa-microphone-alt"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChatBox;