import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';



export default class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        // location: 'topics'
    }

    render() {
        return (
            <div className="chart">
                Chart Component
                <Pie
                    data={this.state.chartData}
                    width={300}
                    height={150}
                    options={{ 
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Your most popular Topics studied',
                            fontSize: 25,
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }
                    }}
                />
            </div>
        )
    }
}
