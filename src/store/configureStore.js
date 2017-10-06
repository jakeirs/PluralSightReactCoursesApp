import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( thunk, reduxImmutableStateInvariant() )
  );
}

/** add middleware (oprogramowanie specjalistyczne,
 *  we're going to need a function that comes with Redux called applyMiddleware.
 *  We can pass as many pieces of middleware as we want) */

/** We're adding redux-thunk to manage with Async*/