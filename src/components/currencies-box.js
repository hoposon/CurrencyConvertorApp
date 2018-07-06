import React, { Component } from 'react';

class CurrenciesBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // # tady jeste proverit to value v tom prvnim optionu
        let options = [<option value=''>Select currency code</option>];
        for(let temp in this.props.currencies) {
            options.push(<option value={temp}>{temp} | {this.props.currencies[temp]}</option>);
        }
        return(
            <select 
                onChange = {(event) => this.props.onSelect(event.target.value, this.props.boxType)}
            >
                {options}
            </select>
        );
    }
}



export default CurrenciesBox;