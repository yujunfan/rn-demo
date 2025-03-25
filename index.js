
import * as React from 'react';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppRegistry} from 'react-native';
import App from './App';

if (__DEV__) {
  require('./ReactotronConfig');
}

export default function Main() {

  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
