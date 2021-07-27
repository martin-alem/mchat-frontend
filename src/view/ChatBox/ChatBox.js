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
        this.showEmoji = this.showEmoji.bind(this);
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

    emojiIcon() {

        const input = document.querySelector(".ChatBox-input");
        const root = document.querySelector(".Chat");
        const picker = new EmojiButton({
            rootElement: root,
            autoHide: false,
            position: "auto",
            i18n: {
                search: 'Search',
                categories: {
                    recents: 'Recently Used',
                    smileys: 'Smileys & People',
                    animals: 'Animals & Nature',
                    food: 'Food & Drink',
                    activities: 'Activities',
                    travel: 'Travel & Places',
                    objects: 'Objects',
                    symbols: 'Symbols',
                    flags: 'Flags'
                },
                notFound: 'No emojis found'
            }
        });

        picker.on('emoji', emoji => {
            input.value += emoji;
        });

        return [picker, root];
    }

    showEmoji() {
        const [picker, input] = this.emojiIcon()
        picker.pickerVisible ? picker.hidePicker : picker.showPicker(input);
    }

    render() {
        return (
            <div className="ChatBox">
                <form onSubmit={this.handleSubmit}>
                    <div className="Chat">
                        <i onClick={this.handleOpenOptions} className="fas fa-plus"></i>
                        <div className="Input">
                            <textarea value={this.state.query} name="query" className="ChatBox-input" onChange={this.handleChange} ></textarea>
                            <i onClick={this.showEmoji} className="far fa-laugh"></i>
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