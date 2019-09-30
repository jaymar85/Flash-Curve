import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getUserCards} from '../../Redux/reducers/cardReducer';

class TopicCards extends Component {
    componentDidMount() {
        // console.log('hit');
        this.props.getUserCards(this.props.match.params.topic_id);
    }

    render() {
        
        console.log(this.props.cards);
        const cardDisplay = this.props.cards.map((cards, index) => {
            return (
                <div key={index} className='flashcards'>  
                    <h5>{cards.name}</h5>                    
                    <p>{cards.description}</p>                    
                </div>
            )
        })

        return (
            <div>
                <h1>Topic Cards {this.props.match.params.topic_id}</h1>
                {cardDisplay}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        cards: reduxState.cardReducer.cards
    }
}

export default connect(mapStateToProps, 
    {
        getUserCards
    }
)(TopicCards);