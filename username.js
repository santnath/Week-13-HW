import React from 'react'
export default class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`A username was submitted: ` + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return(
            <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Username'/>
        )
    }
}


