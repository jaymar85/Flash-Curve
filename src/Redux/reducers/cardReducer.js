import axios from 'axios';

// Initial State
const initialState = {
    topics: [],
    cards: []
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

// TOPIC functions
export function accessUserTopics() {
    return {
        type: GET_USER_TOPICS,
        payload: axios.get('/api/topics')
    }
}
export function updateTopicName() {
    return {
        type: UPDATE_TOPIC_NAME,
        payload: axios.put('/api/topic_name')
    }
}
export function registerUserDesc() {
    return {
        type: UPDATE_TOPIC_DESCRIPTION,
        payload: axios.put('/api/topic_description')
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
export function deleteTopic() {
    return {
        type: DELETE_TOPIC,
        payload: axios.delete('/api/topic')
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
export function addCard() {
    return {
        type: ADD_CARD,
        payload: axios.post('/api/create')
    }
}
export function deleteCard() {
    return {
        type: DELETE_CARD,
        payload: axios.put('/api/flashcard')
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
            return {
                ...state,
                topics: payload.data
            };
        case `${UPDATE_TOPIC_DESCRIPTION}_FULFILLED`:
            // console.log(payload.data);
            return {
                ...state,
                topics: payload.data
            };
        case `${ADD_TOPIC}_FULFILLED`:
            // console.log(payload.data);
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
            console.log(payload);
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
            // console.log(payload.data);
            return {
                ...state,
                cards: payload.data
            };
        case `${DELETE_CARD}_FULFILLED`:
            return {
            ...state,
            cards: payload.data
            };
        default: return state;
    }
}