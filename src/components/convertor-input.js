import React, { Component } from 'react';

class ConvertorInput extends Component {
    constructor(props) {
        super(props);

        this.state = {amount:''};
    }


    render() {
        return (
            <input 
                type="text" 
                className="form-control" 
                id="FormControlInput" 
                placeholder="Type amount"
                value = {this.state.amount}
                onChange = {event => {
                    this.onInputChange(event.target.value)
                }}
            />
        );
    }

    onInputChange(term) {
        if (/^\d+$/.test(term) || /^$/.test(term)) {
            this.setState({amount: term});
            this.props.onAmountChange(term);
        }
        
    }
}

export default ConvertorInput;