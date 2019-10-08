import React, { Component } from 'react'
import Chart from '../Chart/Chart'
// import {Link} from "react-router-dom";

export default class UserProfile extends Component {

    constructor() {
        super();
        this.state = {
            // chartData: {},
        }
    }
    componentDidMount() {
        
    }

    resetMyViews = () => {
        this.props.resetViews();
    }

    render() {
        console.log(this.props.views);
        return (
            <div>
                My Profile                
                <button onClick={this.resetMyViews}>Reset</button>
                <Chart />               
            </div>
        )
    }
}

// <Link to="/user">Update</Link>