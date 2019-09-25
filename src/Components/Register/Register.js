import React, { Component } from 'react'
// import axios from 'axios';
import {Link} from "react-router-dom";
// import {connect} from 'react-redux';
// import {registerUser} from '../../Redux/reducers/userReducer';


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '', 
            password: '', 
            email: '', 
            first_name: '', 
            last_name: ''
        }
    }

    // register() {
    //     const {username, password, email, first_name, last_name} = this.state;
    //     axios   
    //         .post('/auth/register', {username, password, email, first_name, last_name})
    //         .then(user => {
    //             this.setState({username: '', password: '', email: '', first_name: '', last_name: ''});
    //         })
    // }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div>
                <form name='register' onSubmit={this.handleSubmit}>
                    <h2>New Users</h2>
                    <label>Create a username:</label>
                    <input 
                    name='username' 
                    onChange={this.handleInput} 
                    />
                    <label>password</label>
                    <input 
                    name='password' 
                    onChange={this.handleInput} 
                    />
                    <label>email:</label>
                    <input 
                    name='email' 
                    onChange={this.handleInput} 
                    />
                    <label>First name</label>
                    <input 
                    name='firstName' 
                    onChange={this.handleInput} 
                    />   
                    {/* <button type='submit'>submit</button>*/}
                    <Link to="/user">Submit</Link>
                </form>
                </div>
            </div>
        )
    }
}
