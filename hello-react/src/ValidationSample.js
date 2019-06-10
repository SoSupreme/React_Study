import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        this.sex.focus();
    }

    render() {
        return (
            <div>
                <input 
                ref = {(ref) => this.sex = ref}
                type="password"
                value={this.state.password}
                onChange = {this.handleChange}
                className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />

                <button
                onClick = {this.handleClick}>검증</button>
                
            </div>
        );
    }
}

export default ValidationSample;