import axios from 'axios';

// Initial State
const initialState = {
    userId: null,
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
}

// Action type
const GET_USER = 'GET_USER';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
}
export function registerUser(newUser) {
    // function exporting to Register component
    // console.log('hit', newUser);
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', newUser)
    }
}
export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
}
export function logoutUser() {
    axios.post('/auth/logout')
    return {
        type: LOGOUT_USER
    }
} 

// Reducer
export default function Reducer(state=initialState, action) {
    const {type, payload} = action;
    console.log(payload);
    switch(type) {
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                firstName: payload.data.firstName
            };
        case `${REGISTER_USER}_FULFILLED`:
            console.log(payload.data);
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                password: payload.data.password,
                email: payload.data.email,
                firstName: payload.data.first_name,
                lastName: payload.data.last_name
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                firstName: payload.data.firstName
            };
            case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                firstName: payload.data.firstName
            };
        default: return state;
    }
}