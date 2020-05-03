import {createStore, combineReducers, applyMiddleware} from 'redux';
import homePageReducer from './homePageReducer';
import thunkMiddlaware from 'redux-thunk';


let reducers = combineReducers({
    homePage: homePageReducer
})

export const store = createStore(reducers,applyMiddleware(thunkMiddlaware))