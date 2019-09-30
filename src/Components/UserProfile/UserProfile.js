import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                My User Profile Page                
                <Link to="/user">Update</Link>
            </div>
        )
    }
}
