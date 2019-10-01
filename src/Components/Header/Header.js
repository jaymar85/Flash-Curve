import React from "react";
import "./Header.scss";
import logo from "../../assets/fc_logo1.png";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, loginUser, logoutUser} from '../../Redux/reducers/userReducer';

class Header extends React.Component {
    
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
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

    handleLogout = () => {
        this.props.logoutUser().then((res) => {
            // console.dir(message)
            // alert(res.value.data)
            this.props.history.push('/')
        })
    }

    render() {
        const {firstName, username} = this.props;
        // const alias = firstName ? firstName : 'Guest'; 
        return (            
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="flash curve"/></Link>
                    </div>
                    {this.props.userId ? (
                    <div id='logout-form'>
                        <h4>Hello, {this.props.firstName} {this.props.lastName}</h4>                
                        <button type='submit' onClick={this.handleLogout}>Log Out</button> 
                    </div>
                    ) : (
                    <form name='login' >
                        <div className="loginForm">
                            <div className="input-wrap">                           
                                
                                <div id="username">
                                    <label></label>
                                    <input 
                                    className="add-username"
                                    name="username" 
                                    placeholder="Username"
                                    onChange={this.handleInput}/>
                                </div>
                                
                                <div id="password">
                                    <label></label>
                                    <input 
                                    className="add-password"
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleInput}/>
                                </div>
                                
                            </div>                            
                            
                            <div className="link-wrap">
                                <button onClick={this.handleLogin}>Log In</button>
                                <Link to="/register"><button>Sign Up</button></Link>
                            </div>
                        </div>
                    </form>
                    )}
                </nav>          
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId,
        username: reduxState.userReducer.username,
        firstName: reduxState.userReducer.firstName,
        lastName: reduxState.userReducer.lastName
    }
}

export default withRouter(connect(mapStateToProps, {
    getUser,
    loginUser,
    logoutUser
}
)(Header));