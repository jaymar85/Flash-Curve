import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class UserLanding extends Component {
    render() {
        return (
            <div>
                User's Page
                
                <Link to="/post">Create</Link>
                <Link to="/myprofile">My Profile</Link>
                <Link to="/">Log out</Link>
            </div>
        )
    }
}
