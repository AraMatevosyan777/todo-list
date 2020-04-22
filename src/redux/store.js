import {createStore, combineReducers} from 'redux';
import homePageReducer from './homePageReducer';


let reducers = combineReducers({
    homePage: homePageReducer
})

export const store = createStore(reducers)