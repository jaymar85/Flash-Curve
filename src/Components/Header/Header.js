import React from "react";
import "./Header.css";
import {HashRouter, Link} from "react-router-dom";
import routes from "../../routes";

class Header extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="nav">
                        <div className="logo">Flash Curve</div>
                        <div className="link-wrap">
                            <Link to="/" className="links">Home</Link>
                            <Link to="/about" className="links">About</Link>
                        </div>
                    </nav>
                    {routes}
                </div>
            </HashRouter>
        )
    }
}

export default Header;