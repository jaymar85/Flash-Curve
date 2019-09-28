import React, { Component } from "react";
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
        // const formName = e.target.name; //name = to the form
        const { username, password, email, first_name, last_name } = this.state;
        // console.log(username);
        const { registerUser } = this.props;
        registerUser({
            username,
            password,
            email,
            first_name,
            last_name
            // = newUser in Redux
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
        <div>
            <h1>Welcome to Flash Curve!</h1>
            <h4>To setup an account please register below.</h4>
            <div>
                <form name="register" >
                    <label>Username</label>
                        <input name="username" onChange={this.handleInput} />
                    <label>Password</label>
                        <input name="password" onChange={this.handleInput} />
                    <label>Email</label>
                        <input name="email" onChange={this.handleInput} />
                    <label>First name</label>
                        <input name="first_name" onChange={this.handleInput} />
                    <label>Last name</label>
                        <input name="last_name" onChange={this.handleInput} />
                    <button type='submit' onClick={this.handleSubmit}>submit</button>                    
                </form>
            </div>
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

// onSubmit={this.handleSubmit}
// <button type="submit" onClick={this.handleSubmit}>submit</button>