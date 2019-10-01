import React, { Component } from 'react'
// import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getUserCards, addCard } from '../../Redux/reducers/cardReducer';

class TopicCards extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            description: ''
        }
    }

    componentDidMount() {
        this.props.getUserCards(this.props.match.params.topic_id);
    }

    addNewFlachcard() {
        const {description} = this.state;
        const {addCard} = this.props;
        addCard({description}).then(response => {
            this.setState({cards: response.data});
        })
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
        getUserCards,
        addCard
    }
)(TopicCards);