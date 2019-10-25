import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input 
                value={this.state.username}
                name='username'
                onChange={(e) => this.handleInput(e)}/>
                <input 
                value={this.state.password}
                type='password'
                name='password'
                onChange={(e) => this.handleInput(e)}/>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

export default Auth;