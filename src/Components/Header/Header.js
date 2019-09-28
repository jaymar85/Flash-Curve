import React from "react";
import logo from "../../assets/fc_logo.png";
import "./Header.css";
// import axios from "axios";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, loginUser, logoutUser} from '../../Redux/reducers/userReducer';

class Header extends React.Component {
    
    constructor() {
        super();
        this.state = {
            firstName: '',
            username: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     // this.props.getUser();
    // }

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

    handleInput = e => {
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value }); 
    };

    // handleLogout = () => {
    //     this.props.logoutUser();
    //     this.props.history.push('/');
    // }

    render() {
        // if(this.props.user_id) {
        //     return 
        // }
        // const {first_name} = this.props;
        // const alias = firstName ? firstName : 'Guest';
        return (            
            <div>
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="flash curve"/></Link>
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
                                <button >Log In</button>
                                <Link to="/register" className="links">Sign Up</Link>
                            </div>
                        </div>
                    </form>
                    }       
                    
                    {this.state.firstName ? <button onClick={this.handleLogout}></button> : null}
                </nav>
            </div>           
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.user_id
    }
}

export default withRouter(connect(mapStateToProps, {
    getUser,
    loginUser,
    logoutUser
}
)(Header));