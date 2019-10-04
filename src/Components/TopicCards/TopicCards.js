import React, { Component } from 'react'
import './TopicCards.scss'
// import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getUserCards, addCard , deleteCard, } from '../../Redux/reducers/cardReducer';

class TopicCards extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            description: ''
        }     
        this.addNewCard = this.addNewCard.bind(this);
        this.deleteThisCard = this.deleteThisCard.bind(this);
        this.handleCardInput = this.handleCardInput.bind(this); 
        
    }

    componentDidMount() {
        // console.log(this.props.match.params.topic_id)
        this.props.getUserCards(this.props.match.params.topic_id);
    }

    addNewCard() {        
        if (!this.state.description) return;
        const {description} = this.state;
        const {addCard} = this.props;
        addCard(this.props.match.params.topic_id, {description})
        this.setState({description: ''})
            // .then(results => {
            // console.log(description);
            // this.setState({ cards: results.description });
            // this.setState({ this.props.cards, this.state.description });
            // this.props.cards(results.data);
        // })
    }

    deleteThisCard(topic_id, card_id) {
        const { deleteCard } = this.props;
        deleteCard(topic_id, card_id);
    }
    
    updateThisCard() {}

    handleCardInput(value) {
        this.setState({ description: value});
    }

    render() {
        // console.log(this.props.match.params.topic_id);
        const cardDisplay = this.props.cards.map((cards, index) => {
            // console.log(cards);
            return (
                <div key={index} className='flashcard'>  
                    <h5>{cards.name}</h5>                    
                    <p>{cards.description}</p>
                    <button 
                    onClick={() => this.deleteThisCard(this.props.match.params.topic_id, cards.card_id)}
                    type="button"
                    className="delete-btn"
                    >-</button>                                  
                </div>
            )
        })
        // Need to change line 72 of title
        return (
            <div className="hello">
                <h1>Topic Cards {this.props.match.params.topic_id}</h1> 
                <div>            
                    <input 
                    autoComplete="off"
                    className="add-description"
                    name="description"
                    type="text"
                    placeholder="Add a note"
                    value={this.state.description}
                    onChange={(e) => this.handleCardInput(e.target.value)}
                    />                    
                    <button 
                    type="button"
                    className="add-btn"
                    onClick={this.addNewCard}>+</button> 
                </div>
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
        addCard,
        deleteCard,
        
    }
)(TopicCards);