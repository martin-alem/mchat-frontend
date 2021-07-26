import React, { PureComponent } from 'react';
import "./Modal.css";

class Modal extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Modal">
                <h2>Select a file to upload</h2>
                <div className="Items">
                    <div className="Photo">
                        <input type="file" id="photo" accept="image/*" />
                        <label for="photo"><i class="fas fa-upload"></i> Upload a photo</label>
                    </div>
                    <div className="Video">
                        <input type="file" id="media" accept="video/*" />
                        <label for="media"><i class="fas fa-upload"></i> Upload a Video</label>
                    </div>
                    <div className="Audio">
                        <input type="file" id="media" accept="audio/*" />
                        <label for="media"><i class="fas fa-upload"></i> Upload an Audio</label>
                    </div>
                    <div className="Doc">
                        <input type="file" id="doc" accept="document/*" />
                        <label for="doc"><i class="fas fa-upload"></i> Upload a document</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal