import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store/store';
import { TopLevelLayout } from 'layouts/TopLevelLayout';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TopLevelLayout />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
