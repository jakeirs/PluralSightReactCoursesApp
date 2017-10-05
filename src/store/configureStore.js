import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}

/** add middleware (oprogramowanie specjalistyczne,
 *  we're going to need a function that comes with Redux called applyMiddleware) */