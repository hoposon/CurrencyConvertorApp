import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import ConvertorInput from './components/convertor-input';

// main component of the application
class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ConvertorInput />
            </div>
        );
    }

}









// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.root'));