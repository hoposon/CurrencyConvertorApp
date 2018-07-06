import React from 'react';

const ShowValue = (props) => {
    switch(props.type) {
        case 'simple' :
            // console.log(props.value);
            return (
                <div className="form-group">
                    <label>{props.label}</label>
                    {/* <div>{props.value}</div> */}
                    <input type="text" readOnly className="form-control" value={props.value} />
                </div>
            );
            break;
        case 'simple1' :
            // console.log(props.value);
            return (
                <div className="form-group  col-sm-4">
                    <label>{props.label}</label>
                    {/* <div>{props.value}</div> */}
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
    }
    
};


export default ShowValue;