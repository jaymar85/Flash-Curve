import React, { Component } from 'react';
import './Home.scss';
import logo from "../../assets/fc_logo2.png";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {

    render() {
        if(this.props.userId) {
            return <Redirect to="/user"/>
        } 

        return (
            <div className="body-container">
                <div id="color-top">             
                    <div className="body-logo">                        
                        <h2>Welcome to</h2>
                        <img src={logo} alt="flash curve"/>
                    </div>  
                </div>
            </div>
        )
    }
}

const maptStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
}

export default connect(maptStateToProps)(Home);