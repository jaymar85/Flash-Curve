import React, { Component } from 'react'
import './TopicCards.scss'
// import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getUserCards, addCard , deleteCard, addView} from '../../Redux/reducers/cardReducer';

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
        this.props.getUserCards(this.props.match.params.topic_id);
        this.props.addView(this.props.match.params.topic_id);
    }

    addNewCard() {        
        if (!this.state.description) return;
        const {description} = this.state;
        const {addCard} = this.props;
        addCard(this.props.match.params.topic_id, {description})
        this.setState({description: ''})
    }

    deleteThisCard(topic_id, card_id) {
        const { deleteCard } = this.props;
        deleteCard(topic_id, card_id);
    }

    handleCardInput(value) {
        this.setState({ description: value});
    }

    render() {
        // console.log(this.props.match.params.topic_id);
        const cardDisplay = this.props.cards.map((cards, index) => {
            return (
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div key={index} className='flashcard'>                     
                                <p>{cards.description}</p>
                                <button 
                                className="delete-btn"
                                onClick={() => this.deleteThisCard(this.props.match.params.topic_id, cards.card_id)}
                                type="button"
                                >Delete</button>                                  
                            </div>

                            <div class="flip-card-back"></div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="flashcard-page-container">
                <h1>Topic Cards {this.props.match.params.topic_id}</h1> 
                <div className="add-flashcard-container">            
                    <input 
                    className="add-description"
                    autoComplete="off"
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
        addView  
    }
)(TopicCards);