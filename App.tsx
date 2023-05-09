import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index.routes';
import { navigationRef } from '@services/navigation/root';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
