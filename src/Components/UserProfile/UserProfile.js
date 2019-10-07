import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Chart from '../Chart/Chart'
import {resetViews, getViews} from '../../Redux/reducers/cardReducer';
import {connect} from 'react-redux';

class UserProfile extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {},
            byTopics: []
        }
    }

    componentDidMount() {
        this.props.getViews();
    }

    componentWillMount() {
        this.getChartData();
    }

    resetMyViews = () => {
        this.props.resetViews();
    }

    getChartData() {
        // Ajox calls here
        this.setState({
            chartData: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                label: 'Your most popular Topics studied',
                datasets: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]}
        });
    }
    render() {
        console.log(this.props.views);
        return (
            <div>
                My User Profile Page 
                <Link to="/user">Update</Link>
                <button onClick={this.resetMyViews}>The Destroyer</button>
                <Chart chartData={this.state.chartData} location="Topics" legendPosition='bottom' />               
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        views: reduxState.cardReducer.views
    }
}

export default connect(mapStateToProps, 
    {
        resetViews, 
        getViews
    }
)(UserProfile);