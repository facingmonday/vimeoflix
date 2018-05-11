import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';
import loadingPromise from './customMiddleware/promise';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const logger = createLogger({
  // ...options
});
// Middleware you want to use in production:
const enhancer = applyMiddleware(loadingPromise);//logger

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(enhancer)
  );
};