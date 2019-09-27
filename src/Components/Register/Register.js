import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../../Redux/reducers/userReducer';

class Register extends Component {
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

    handleSubmit = (e) => {
        const formName = e.target.name; //???????
        const {username, password, email, first_name, last_name} = this.state;
        const {registerUser} = this.props;
        if(formName === 'register') {
            registerUser({
                username, 
                password, 
                email, 
                first_name, 
                last_name
            })
        }
    }

    handleInput = (e) => {
        // this.setState({[e.target.name]: e.target.value}) //??????
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
                <h1>Welcome to Flash Curve!</h1>
                <h4>To setup an account please register below.</h4>
                <div>
                <form name='register' onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input 
                    name='username' 
                    onChange={this.handleInput} 
                    />
                    <label>Password</label>
                    <input 
                    name='password' 
                    onChange={this.handleInput} 
                    />
                    <label>Email</label>
                    <input 
                    name='email' 
                    onChange={this.handleInput} 
                    />
                    <label>First name</label>
                    <input 
                    name='first_name' 
                    onChange={this.handleInput} 
                    />   
                    <label>Last name</label>
                    <input 
                    name='last_name' 
                    onChange={this.handleInput} 
                    />   
                    <Link to="/user">
                    <button type='submit'>submit</button>
                    </Link>
                </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        // user_id: reduxState.userReducer.user_id //???????
    }
}

export default connect(mapStateToProps,
    registerUser
    )(Register);