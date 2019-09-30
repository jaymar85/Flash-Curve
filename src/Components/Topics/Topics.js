// import React, { Component } from 'react'
// import {Link} from "react-router-dom";
// import {connect} from 'react-redux';
// import {getUserCards} from '../../Redux/reducers/cardReducer';

// class Topics extends Component {
    
//     componentDidMount() {
//         // console.log('hit');
//         this.props.getUserCards();
//     }

//     render() {
//         const cardDisplay = this.props.cards.map((cards, index) => {
//             // console.log(cards);
//             return (
//                 <div key={index} className='flashcards'>  
                
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 Topics Flash cards
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = reduxState => {
//     return {
//         cards: reduxState.cardReducer.cards
//     }
// }

// export default connect(mapStateToProps, 
//     {
//         getUserCards
//     }
// )(Topics);