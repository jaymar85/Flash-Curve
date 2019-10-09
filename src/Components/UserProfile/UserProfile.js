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

    render() {
        console.log(this.props.views);
        return (
            <div>
                My Profile                
                
                <Chart />               
            </div>
        )
    }
}