import React from "react";
import logo from "../../assets/fc_logo.png";
import "./Header.css";
// import axios from "axios";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, logoutUser} from '../../Redux/reducers/userReducer';

class Header extends React.Component {
    
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getUser();
    }
    register() {}

    handleLogout = () => {
        this.props.logoutUser();
        this.props.history.push('/');
    }

    render() {
        const {first_name} = this.props;
        // const alias = firstName ? firstName : 'Guest';
        return (            
            <div>
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="flash curve"/></Link>
                    </div>
                    {/* Login Form */}
                    {this.props.location.pathname !== '/'
                    ? null 
                    :
                    <section>
                        <div className="loginForm">
                            <div className="input-wrap">
                                {/* Username */}
                                <div className="titles">
                                    <p>Username</p>
                                    <p>Password</p>                                        
                                </div>
                                {/* Password */}
                                <div className="inputs">
                                    <input 
                                    type="text" 
                                    placeholder="Username"
                                    // value={username}
                                    onChange={e => this.handleUsernameInput(e.target.value)}/>
                                    <input type="password" 
                                    placeholder="password"
                                    // value={password}
                                    onChange={e => this.handlePasswordInput(e.target.value)}/>
                                </div>
                            </div>                            
                            {/* Login/Registration Button */}                
                            <div className="link-wrap">
                                <Link to="/user" className="links">Log In</Link>
                                <Link to="/register" className="links">Sign Up</Link>
                            </div>
                        </div>
                    </section>
                    }
                
                    
                    {first_name ? <button onClick={this.handleLogout}></button> : null}
                </nav>
            </div>           
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        firstName: reduxState.userReducer.firstName
    }
}

export default withRouter(connect(mapStateToProps, {
    getUser,
    logoutUser
}
)(Header));