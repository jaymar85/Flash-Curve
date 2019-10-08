import axios from 'axios';

// Initial State
const initialState = {
    topics: [],
    cards: [],
    views: []
}

// TOPIC Action types
const GET_USER_TOPICS = 'GET_USER_TOPICS';
const UPDATE_TOPIC_NAME = 'UPDATE_TOPIC_NAME';
const UPDATE_TOPIC_DESCRIPTION = 'UPDATE_TOPIC_DESCRIPTION';
const ADD_TOPIC = 'ADD_TOPIC';
const DELETE_TOPIC = 'DELETE_TOPIC';
// FLASHCARD Action types
const GET_USER_CARDS = 'GET_USER_CARDS';
const UPDATE_CARD = 'UPDATE_CARD';
const ADD_CARD = 'ADD_CARD';
const DELETE_CARD = 'DELETE_CARD';
// VIEWS
const GET_USER_VIEWS = 'GET_USER_VIEWS';
const ADD_VIEW = 'ADD_VIEW';
const RESET_VIEWS = 'RESET_VIEWS';

// TOPIC functions
export function accessUserTopics() {
    return {
        type: GET_USER_TOPICS,
        payload: axios.get('/api/topics')
    }
}
export function updateTopicName(name) { // parameter name is an object
    // console.log(name)
    return {
        type: UPDATE_TOPIC_NAME,
        payload: axios.put('/api/topic_name', name)
    }
}
export function updateTopicDescription(description) {
    return {
        type: UPDATE_TOPIC_DESCRIPTION,
        payload: axios.put('/api/topic_description', description)
    }
}
export function addTopic(newCase) { 
    return {
        type: ADD_TOPIC,
        payload: axios.post('/api/topic', newCase)
    }
    // newCase = new object
    // relaying and shooting the info to the back
}
export function deleteTopic(topic_id) {                            
    return {
        type: DELETE_TOPIC,
        payload: axios.delete(`/api/topic/${topic_id}`)
    }
} 
// FLASHCARD functions
export function getUserCards(topicId) {
    return {
        type: GET_USER_CARDS,
        payload: axios.get(`/api/flashcard/${topicId}`)
    }
}
export function updateCard() {
    return {
        type: UPDATE_CARD,
        payload: axios.put('/api/flashcard')
    }
}
export function addCard(topic_id, newCard) { 
    // console.log(newCard);
    return {
        type: ADD_CARD,
        payload: axios.post(`/api/flashcard/${topic_id}`, newCard)
    }
}
export function deleteCard(topic_id, card_id) {
    // console.log(card_id);
    return {
        type: DELETE_CARD,
        payload: axios.delete(`/api/flashcard/${card_id}/${topic_id}`)
    }
}
// VIEWS
export function getViews() {
    return {
        type: GET_USER_VIEWS,
        payload: axios.get(`/api/views`)
    }
}
export function addView(topic_id) {
    return {
        type: ADD_VIEW,
        payload: axios.post(`/api/views/${topic_id}`)
    }
}
export function resetViews() {
    return {
        type: RESET_VIEWS,
        payload: axios.delete('/api/reset_views')
    }
}

// Reducer
export default function Reducer(state=initialState, action) {
    const {type, payload} = action;
    // console.log(payload);
    switch(type) {
        ////////////// TOPIC cases //////////////
        case `${GET_USER_TOPICS}_FULFILLED`:
            return {
                ...state,
                topics: payload.data
            };
        case `${UPDATE_TOPIC_NAME}_FULFILLED`:
            console.log(payload.data);
            return {
                ...state,
                topics: payload.data
            };
        case `${UPDATE_TOPIC_DESCRIPTION}_FULFILLED`:
            console.log(payload.data);
            return {
                ...state,
                topics: payload.data
            };
        case `${ADD_TOPIC}_FULFILLED`:
            return {
                ...state,
                topics: payload.data
            };
        case `${DELETE_TOPIC}_FULFILLED`:
            return {
                ...state,
                topics: payload.data
            };

        /////////// FLASHCARD cases /////////////
        case `${GET_USER_CARDS}_FULFILLED`:
            return {
                ...state,
                cards: payload.data
            }
        case `${UPDATE_CARD}_FULFILLED`:
            return {
                ...state,
                cards: payload.data
            };
        case `${ADD_CARD}_FULFILLED`: 
            // console.log(payload);
            return {
                ...state,
                cards: payload.data
            };
        case `${DELETE_CARD}_FULFILLED`:        
            return {
            ...state,
            cards: payload.data
            };

        /////////// VIEWS cases /////////////
        case `${GET_USER_VIEWS}_FULFILLED`:
            console.log(payload.data);
            return {
                ...state,
                views: payload.data
            }
        // case `${GET_USER_VIEWS}_PENDING`:
        //         return {
        //             ...state,
        //             views: 'LOADING...'
        //         }
        case `${ADD_VIEW}_FULFILLED`:
            console.log(payload.data);
            return {
                ...state,
                views: payload.data
            }
        case `${RESET_VIEWS}_FULFILLED`:
            return {
                ...state,
                views: []
            }
        default: return state;
    }
}