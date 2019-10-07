import React from "react";
import "./Header.scss";
import logo from "../../assets/fc_logo1.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getUser, loginUser, logoutUser} from "../../Redux/reducers/userReducer";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        navMenuStatus: "side-menu"
        };
    }

    componentDidMount() {
        this.props.getUser();
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const { loginUser } = this.props;
        loginUser({
        username,
        password
        });
    };

    handleLogout = () => {
        this.props.logoutUser().then(res => {
        this.props.history.push("/");
        });
    };

    toggle = () => {
        const { navMenuStatus } = this.state;
        if (navMenuStatus === "side-menu-close" || navMenuStatus === "side-menu") {
        this.setState({ navMenuStatus: "-menu-open" });
        } else if (navMenuStatus === "side-menu-open") {
        this.setState({ navMenuStatus: "side-menu-close" });
        }
    };

    render() {
        const { navMenuStatus } = this.state;
        const { firstName, lastName } = this.props;
        // const alias = firstName ? firstName : 'Guest';
        return (
        <div>
            <nav className="nav">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="flash curve" />
                </Link>
            </div>

            <div className="terminator">
                {this.props.userId ? (
                <div className="logout-form">
                    <h4 className="nav-greeting">Hello, {firstName} {lastName}</h4>

                    <div className="to-profile">
                        <Link to="/user/profile">
                            <h4>Profile</h4>
                        </Link>
                    </div>

                    <button 
                    type="submit" 
                    onClick={this.handleLogout}>Log Out</button>
                </div>
                ) : (
                <form name="login" autoComplete="off">
                    <div className="login-form">
                        <div className="input-wrap">
                            <div id="username">
                            <input
                                className="add-username"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleInput}
                            />
                            </div>

                            <div id="password">
                            <input
                                className="add-password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleInput}
                            />
                            </div>
                        </div>

                        <div className="link-wrap">
                            <button className="login_btn" onClick={this.handleLogin}>Log In</button>
                            <Link to="/register">
                            <button className="signup_btn">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </form>
                )}
                <div className={`${navMenuStatus} side-menu-routes`}></div>
                <div className="hamburger_container">
                <div>
                    <button className="hamburger" onClick={this.toggle}>
                    MENU
                    <span>&#9776;</span>
                    </button>
                </div>
                </div>
            </div>
            </nav>
        </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId,
        username: reduxState.userReducer.username,
        firstName: reduxState.userReducer.firstName,
        lastName: reduxState.userReducer.lastName
    };
};

export default withRouter(
    connect(
    mapStateToProps,
    {
        getUser,
        loginUser,
        logoutUser
    }
)(Header));
