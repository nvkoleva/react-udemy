import React, { Component } from 'react';

// File to handle possible errors -> display an error message boundary
// Only use if it might fail and you can't control that

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;