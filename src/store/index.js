import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import products from './reducers/products';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
        //合并reducers，类似vuex的modules
        products,
});

export default createStore(rootReducer, compose(applyMiddleware(...[thunk])));
