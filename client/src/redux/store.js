import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddaleware from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddaleware)))

export default store;