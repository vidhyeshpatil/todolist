import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AllReducers from '../reducer';

export default createStore(AllReducers,applyMiddleware(thunk));