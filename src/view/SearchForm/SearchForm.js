import React, { PureComponent } from 'react';
import "./SearchForm.css";

class SearchForm extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            query: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        let character = event.target.value;
        if (this.validateInput(character) || character === "") {
            this.setState({ [event.target.name]: character });

            /**
             * The value of this.state.query will be passed to the function handling searching.
             */
        }
    }

    validateInput(character) {

        return /^[A-Za-z]+$/gmi.test(character);
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="Input">
                        <input type="text" value={this.state.query} placeholder="Search" name="query" className="SearchForm-input" onChange={this.handleChange} />
                        <i className="fas fa-search"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchForm;