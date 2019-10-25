import React, {Component} from 'react';
import {updateUser} from '../../ducks/reducer';
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

    handleRegister = () => {
        axios.post('/auth/register', {username: this.state.username, password: this.state.password}).then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    handleLogin = () => {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
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
                <button onChange={(e) => this.handleLogin(e)}>Login</button>
                <button onChange={(e) => this.handleRegister(e)}>Register</button>
            </div>
        )
    }
}

export default Auth;