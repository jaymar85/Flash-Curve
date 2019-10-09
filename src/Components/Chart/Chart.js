import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {resetViews, getViews} from '../../Redux/reducers/cardReducer';
import {connect} from 'react-redux';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        } 
    }        

    componentDidMount() {

        this.props.getViews()
            .then(() => {
                const {views} = this.props;
                let labels = [];
                let chartData = [];
                let backgroundColor = [];
                let borderColor = [];
                
                // Set labels and data
                for(let i = 0; i < views.length; i++) {
                    labels.push(views[i].name)
                    chartData.push(views[i].count)
                }
                
                const chartColors = this.getRandomNum(views.length);
                
                // Set backgroundColor and borderColor
                backgroundColor = chartColors[0];
                borderColor = chartColors[1];
                
                // Set state with our labels, data, backgroundColor, and borderColor
                this.setState({
                    chartData: {
                        labels: labels,
                        datasets: [{
                            title: 'Your Topics most studied',
                            data: chartData,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                        }]
                    }
                })
            })
    }

    getRandomNum(numOfElements) {
        let bgColorArr = [];
        let borderColorArr = [];
        
        for(let i = 0; i < numOfElements; i++) {
            const min = 0, max = 255;
            let spot1 = Math.floor(Math.random() * (max - min + 1) + min);
            let spot2 = Math.floor(Math.random() * (max - min + 1) + min);
            let spot3 = Math.floor(Math.random() * (max - min + 1) + min);
        
            bgColorArr.push(`rgba(${spot1}, ${spot2}, ${spot3}, .8)`)
            borderColorArr.push(`rgba(${spot1}, ${spot2}, ${spot3}, 1)`)
        }    
        return [bgColorArr, borderColorArr]
    }

    resetMyViews = () => {
        this.props.resetViews();
    }

    render() {
        return (
            <div className="chart">
                <h3>Your Topics most studied by view count</h3>
                <Doughnut
                    data={this.state.chartData} 
                />
                <button onClick={this.resetMyViews}>Reset</button>
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
)(Chart);