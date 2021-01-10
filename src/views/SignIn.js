import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div>
                Sign In
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <button>Sign In</button>
            </div>
        );
    }
}

export default SignIn;