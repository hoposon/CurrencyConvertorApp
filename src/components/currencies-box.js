// select boxes component for origin and destination currencies list boxes

// ipmport 3rd party libraries
import React, { Component } from 'react';

class CurrenciesBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // set the first option to placeholder value
        let options = [<option value=''>Select currency code</option>];
        // loop through currencies list retrieved from backend service and set select options
        for(let temp in this.props.currencies) {
            options.push(<option value={temp}>{temp} | {this.props.currencies[temp]}</option>);
        }
        return(
            <select 
                className="form-control" 
                id="FormControlCurrSelect"
                onChange = {(event) => this.props.onSelect(event.target.value, this.props.boxType)}
            >
                {options}
            </select>
        );
    }
}



export default CurrenciesBox;