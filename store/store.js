import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';

import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
