import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {FilmReducer} from './reducers/FilmReducer';

const rootReducer = combineReducers({
    FilmReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;