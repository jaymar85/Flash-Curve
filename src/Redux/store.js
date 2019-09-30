import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import cardReducer from './reducers/cardReducer';

const rootReducer = combineReducers({
    userReducer,
    cardReducer
});

export default createStore(rootReducer, applyMiddleware(promise));