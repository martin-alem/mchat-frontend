import React, { PureComponent } from 'react';
import avatar from "../../img/avatar.jpg";
import "./Chat.css"

class Chat extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        edit: false
    }

    handleChange(event) {
        if (event.target.checked) {
            console.log(event.target.value)
        }
        else {
            console.log("false");
        }
    }

    render() {
        return (
            <div className="Chat">
                <div className="Container">
                    <div className="InnerContainer">
                        <div className={this.props.edit ? "Checkbox" : "Checkbox hidden"}>
                            <input type="checkbox" value="true" name="checkbox" onChange={this.handleChange}></input>
                        </div>
                        <div className="Image">
                            <img src={avatar} alt="User image" className="Avatar" />
                        </div>
                        <div className="Title">
                            <h3>Adjyannah West</h3>
                            <p>Hello! how are you...</p>
                        </div>
                    </div>
                    <div className="Info">
                        <h3>Monday</h3>
                        <div className="Notification">789</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat