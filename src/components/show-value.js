import React from 'react';

const ShowValue = (props) => {
    switch(props.type) {
        case 'simple' :
            // console.log(props.value);

            const value = props.value >= 0 ? props.value.toFixed(2) : props.value
            return (
                <div className="form-group">
                    <label>{props.label}</label>
                    <input type="text" readOnly className="form-control" value={value} />
                </div>
            );
            break;
        case 'simple1' :
            // console.log(props.value);
            return (
                <div className="form-group  col-sm-4">
                    <label>{props.label}</label>
                    <input type="text" readOnly className="form-control" value={props.value} />
                </div>
            );
            break;
        case 'simple2' :
            let input = '';
            if (props.value.maxCurrName) {
                input = <input type="text" readOnly className="form-control" value={props.value.maxCurrCode + ' | ' + props.value.maxCurrName} />;
            } else {
                input = <input type="text" readOnly className="form-control" value='Not available' />;
            }
            return (
                <div className="form-group col-sm-4">
                    <label>{props.label}</label>
                    {input}
                </div>
            );
            break;
        case 'error' :
            return (
                <div className="alert alert-danger" role="alert">
                    {props.label}
                </div>
            );
            break;
    }
    
};


export default ShowValue;