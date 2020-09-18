import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const makeStore = context => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const wrapper = createWrapper(makeStore, {debug: true});