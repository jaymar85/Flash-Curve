import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers/userReducer';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({
    userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));