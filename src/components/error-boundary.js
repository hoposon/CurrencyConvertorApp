// error boundary to handle render exceptions

// ipmport 3rd party libraries
import React, { Component } from 'react';

// import components

// component that is used for displaying various values
// it is general component that accepts props.type which it uses for rendering desired component
import ShowValue from './show-value'; // here it should render error message

// import config
import config from '../config/config';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
            info: '',
            error: ''
        }
    }

    // catch rendering error
    componentDidCatch(error, info) {
        // set state to render correctly
        this.setState({hasError : true, info, error});
        // call error reporting service - not implemented yet
    }

    render() {
        // if error, render error component
        if (this.state.hasError) {
            return <ShowValue label={config.renderingErrorMessage} type='error' />
        } else { // else render application
            return this.props.children
        }
    }
}

export default ErrorBoundary;