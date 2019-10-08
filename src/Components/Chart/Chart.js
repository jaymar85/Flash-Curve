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
                // this.setState({ chartData: {...this.state.chartData, datasets: {...this.state.datasets, data: this.props.data}} })
                const {views} = this.props;
                let labels = [];
                let chartData = [];
                let backgroundColor = [];
                let borderColor = [];
        
                //Add to labels array
                // addLabel = () => {
        
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
        
                // }
                // Add to data array
                // addData = i => {
        
                //     datasets[0].push(this.props.data[i].count);
                // }
                // // Add to background color
                // addColor 


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
          
          bgColorArr.push(`rgba(${spot1}, ${spot2}, ${spot3}, .5)`)
          borderColorArr.push(`rgba(${spot1}, ${spot2}, ${spot3}, 1)`)
        }
      
        return [bgColorArr, borderColorArr]
      }

    render() {
        // console.log(this.props.data[0].count)
        // console.log(this.state)
        return (
            <div className="chart">
                <h3>Chart Component</h3>
                <Doughnut
                    data={this.state.chartData} 
                />
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

//                    
// width={300}
// height={150}
// options={{ 
//     maintainAspectRatio: false,
//     title: {
//         display: this.props.displayTitle,
//         text: 'Your Topics most studied',
//         fontSize: 25,
//         legend: {
//             display: this.props.displayLegend,
//             position: this.props.legendPosition
//         }
