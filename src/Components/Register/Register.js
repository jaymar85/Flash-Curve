import React, { Component } from "react";
import './Register.scss';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../Redux/reducers/userReducer";

class Register extends Component {
    
    constructor() {
        super();
        this.state = {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, password, email, first_name, last_name } = this.state;
        const { registerUser } = this.props;
        registerUser({
            username,
            password,
            email,
            first_name,
            last_name
            // = newUser in Redux
        }).then(() => {
            this.props.history.push('/');
        })
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value }); 
    };

    render() {
        if (this.props.user_id) {
            return <Redirect to='/' />
        } 
        return (
        <div className="register-container">
            <section className="register-center">
            <h1>Welcome to Flash Curve!</h1>
            <h4>To setup an account please register below.</h4>
            <div className="form-container">
                <form className="reg-form" name="register" autoComplete="off">

                    <div id="username">
                    <label>Username</label>
                        <input 
                        name="username" onChange={this.handleInput} />
                    </div>

                    <div id="password">
                    <label>Password</label>
                        <input name="password" type="password" onChange={this.handleInput} />
                    </div>

                    <div id="email">
                    <label>Email</label>
                        <input name="email" onChange={this.handleInput} />
                    </div>

                    <div id="firstname">
                    <label>First name</label>
                        <input name="first_name" onChange={this.handleInput} />
                    </div>

                    <div id="lastname">
                    <label>Last name</label>
                        <input name="last_name" onChange={this.handleInput} />
                    </div>

                    <div id="submit">
                    <button type='submit' onClick={this.handleSubmit}>submit</button> 
                    </div>                   
                </form>
            </div>
            </section>
        </div>
        );
    }
}

    const mapStateToProps = reduxState => {
        return {
            user_id: reduxState.userReducer.user_id
        };
    };

export default connect(mapStateToProps, 
    {
        registerUser
    }  
)(Register);