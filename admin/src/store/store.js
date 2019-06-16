import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [logger, thunk];

const store = createStore(
  rootReducer,
  {}, // initial  state
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;