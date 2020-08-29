import Reactotron from 'reactotron-react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

const middleware = (tron) => {
  /* plugin definition */
};

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'React Native Demo',
  })
  .useReactNative() // add all built-in react native plugins
  .use() // plus some custom made plugin.
  .connect();
