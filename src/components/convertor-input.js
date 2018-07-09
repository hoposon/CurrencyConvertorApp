// input component for amount that should be converted

// ipmport 3rd party libraries
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

    // on value change
    onInputChange(term) {
        // validate input value - only number allowed
        if (/^\d+$/.test(term) || /^$/.test(term)) {
            // set component state
            this.setState({amount: term});
            // try to call conversion
            this.props.onAmountChange(term);
        }
        
    }
}

export default ConvertorInput;