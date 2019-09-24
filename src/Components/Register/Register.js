import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

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

    register() {
        const {username, password, email, first_name, last_name} = this.state;
        axios   
            .post('/auth/register', {username, password, email, first_name, last_name})
            .then(user => {
                this.setState({username: '', password: '', email: '', first_name: '', last_name: ''});
            })
    }

    render() {
        return (
            <div>
                Register
                <div>
                    <Link to="/user">Sign Up</Link>
                </div>
            </div>
        )
    }
}
