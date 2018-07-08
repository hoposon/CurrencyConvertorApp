import React, { Component } from 'react';
import ShowValue from './show-value';

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

    componentDidCatch(error, info) {
        this.setState({hasError : true, info, error});
        // call error reporting service
    }

    render() {
        if (this.state.hasError) {
            return <ShowValue label={config.renderingErrorMessage} type='error' />
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;