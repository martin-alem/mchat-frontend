import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.jpg";
import "./Picture.css"

class Picture extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Picture">
                <div className="Header">
                    <p className="Back info"><Link to="/home/room"><i className="fas fa-arrow-left"></i></Link></p>
                    <h5 className="Name info"><Link to="/home/info">Adjyannah West</Link></h5>
                </div>
                <div className="Img">
                    <img className="Image" src={avatar} alt="Picture" />
                </div>
            </div>
        )
    }
}

export default Picture