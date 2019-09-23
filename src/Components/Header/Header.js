import React from "react";
import logo from "../../assets/flash_curve_logo.png";
import "./Header.css";
import axios from "axios";
import {Link} from "react-router-dom";

class Header extends React.Component {
    
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
    // Input handlers
    handleUsernameInput(val) {
        this.setState({username: val});
    }
    handlePasswordInput(val) {
        this.setState({password: val});
    }

    getUser() {

    }

    register() {
        const {username, password, email, first_name, last_name} = this.state;
        axios   
            .post('/auth/register', {username, password, email, first_name, last_name})
            .then(user => {
                this.setState({username: '', password: '', email: '', first_name: '', last_name: ''});
            })
    }

    // logout() {
    //     axios
    //         .then(() => )
    // }

    render() {
        return (            
            <div>
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="flash curve"/></Link>
                    </div>
                    <div className="loginForm">
                        <div className="input-wrap">
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>  
                        </div>                     
                        <div className="link-wrap">
                            <Link to="/user" className="links">Log In</Link>
                            <Link to="/register" className="links">Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>           
        )
    }
}

export default Header;