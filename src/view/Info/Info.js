import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import "./Info.css"
class Info extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Detail">
                <div className="Header">
                    <p className="Back info"><Link to="/home/room"><i className="fas fa-arrow-left"></i></Link></p>
                    <h2 className="Name info">Adjyannah West</h2>
                </div>
                <div className="Img"></div>
                <div className="Contact">
                    <div className="Personal">
                        <h1 className="Name">Adjyannah West</h1>
                        <p className="Phone">+1 614-284-5041</p>
                        <p className="Email">adjyannah.west@gmail.com</p>
                    </div>
                    <div className="Links">
                        <Link to="/home/room"><i className="fab fa-facebook-messenger"></i></Link>
                        <i className="fas fa-video"></i>
                        <i className="fas fa-phone-alt"></i>
                    </div>
                </div>
                <hr />

                <div className="General">
                    <h2>Hi there! I'm using mChat</h2>
                    <p>February 26, 2020</p>
                </div>
                <hr />
            </div>
        )
    }
}

export default Info;