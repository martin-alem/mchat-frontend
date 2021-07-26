import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.jpg";
import "./ChatRoom.css";

class ChatRoom extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="ChatRoom">
                <div className="Header">
                    <div className="Info">
                        <p className="Back info"><Link to="/home"><i className="fas fa-arrow-left"></i></Link></p>
                        <div className="Img info"><Link to="/home/img/"><img className="Image" src={avatar} alt="Avatar" /></Link></div>
                        <h5 className="LastName info"><Link to="/home/info">Adjyannah</Link></h5>
                    </div>
                    <div className="Call">
                        <p className="Video call"><i className="fas fa-video"></i></p>
                        <p className="Audio call"><i className="fas fa-phone-alt"></i></p>
                    </div>
                </div>
                <div className="Message-Container">

                </div>
            </div>
        )
    }
}

export default ChatRoom;