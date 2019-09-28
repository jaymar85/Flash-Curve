import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

export default class UserLanding extends Component {

    componentDidMount() {}

    render() {
        return (
            <div>
                User's Page
                
                <Link to="/post">Create</Link>
                <Link to="/myprofile">My Profile</Link>
                {/*<button>Log out</button>*/}
            </div>
        )
    }
}
