import React from "react";
import logo from "../../assets/fc_logo.png";
import "./Header.css";
// import axios from "axios";
import {Link, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, loginUser, logoutUser} from '../../Redux/reducers/userReducer';

class Header extends React.Component {
    
    constructor() {
        super();
        this.state = {
            firstName: '',
            username: '',
            password: '',
            // userId: null,
            clickedRegister: false,
            triedToClick: false,
            redirectUser: false,
        }
    }

    componentDidMount() {
        this.props.getUser();
    }
    handleInput = e => {
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value }); 
    };

    handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        // console.log(username);
        const {loginUser} = this.props;
        loginUser({
            username,
            password
        })
    }
    // handleRedirectUser = () => {
    //     this.setState({
    //         redirectUser: true
    //     })
    //     if(this.state.redirectUser === true && this.props.userId === false) {
    //         return <Redirect to="/register"/>
    //     }
    //     console.log(this.state.redirectUser);
    // }
    handleLogout = () => {
        this.props.logoutUser();
        this.props.history.push('/');
    }

    render() {
        // if (this.state.redirectUser === true && this.props.userId === true) {
        //     return <Redirect to="/user"/>
        // }
        if(this.props.userId) {
            return <Redirect to="/user"/>
        }
        const {firstName} = this.props;
        const alias = firstName ? firstName : 'Guest'; //alias in id=Header
        return (            
            <div>
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="flash curve"/></Link>
                    </div>

                    <div id='Header'>
                    <h4>Hello, {alias}</h4>
                    {this.state.firstName ? <button type='submit' onClick={this.handleLogout}>Log Out</button> : null}
                    </div>
                    
                    {this.props.location.pathname !== '/'
                    ? null 
                    :
                    <form name='login' onSubmit={this.handleLogin}>
                        <div className="loginForm">
                            <div className="input-wrap">                           
                                {/* Username */}
                                <div className="username-input">
                                    <label>Username</label>
                                    <input 
                                    name="username" 
                                    placeholder="Username"
                                    // value={username}
                                    onChange={this.handleInput}/>
                                    </div>
                                {/* Password */}
                                <div className="password-input">
                                    <label>Password</label>
                                    <input 
                                    name="password" 
                                    placeholder="password"
                                    // value={password}
                                    onChange={this.handleInput}/>
                                </div>
                            </div>                            
                            {/* Login/Registration Button */}                
                            <div className="link-wrap">
                                <button>Log In</button>
                                <Link to="/register"><button>Sign Up</button></Link>
                            </div>
                        </div>
                    </form>
                    }       

                </nav>
            </div>           
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
}

export default withRouter(connect(mapStateToProps, {
    getUser,
    loginUser,
    logoutUser
}
)(Header));