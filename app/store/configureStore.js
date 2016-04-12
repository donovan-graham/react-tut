import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

import createSagaMiddleware from 'redux-saga';
import fetchData from 'sagas/fetchData';
import watchLocationChange from 'sagas/additionalContribution';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(createSagaMiddleware(fetchData, watchLocationChange)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
