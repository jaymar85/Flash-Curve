import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                My profile
                <Link to="/user">Update</Link>
            </div>
        )
    }
}
