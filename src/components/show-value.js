import React from 'react';

const ShowValue = (props) => {
    switch(props.type) {
        case 'simple' :
            // console.log(props.value);
            return (
                <div>
                    <label>{props.label}</label>
                    <div>{props.value}</div>
                </div>
            );
            break;
        case 'simple1' :
            let div = '';
            if (props.value.maxCurrName) {
                div = <div>{props.value.maxCurrCode} | {props.value.maxCurrName}</div>;
            } else {
                div = <div>{'Not available'}</div>
            }
            return (
                <div>
                    <label>{props.label}</label>
                    {div}
                </div>
            );
            break;
    }
    
};


export default ShowValue;