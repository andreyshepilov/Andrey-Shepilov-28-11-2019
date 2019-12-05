import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { handleNotification } from 'helpers/utils';
import { migrations } from './migrations';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['config'],
  version: 0,
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    handleNotification('Error!');
    console.log(error);
  },
});

export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
