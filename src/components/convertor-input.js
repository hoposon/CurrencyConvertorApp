import React, { Component } from 'react';

class ConvertorInput extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div>
                <input 
                    value = {this.state.amount}
                    onChange = {event => {
                        if (/^\d+$/.test(event.target.value) || /^$/.test(event.target.value)) {
                            this.setState({amount: event.target.value})
                        }
                    }}
                />
            </div>
        );
    }
}

export default ConvertorInput;