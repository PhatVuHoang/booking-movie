import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    //reducer khai báo tại đây
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;