import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './saga';

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer /* preloadedState, */,
    persistedState,
    compose(
      applyMiddleware(sagaMiddleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
      ...(window.__REDUX_DEVTOOLS_EXTENSION__
        ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
        : [])
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
