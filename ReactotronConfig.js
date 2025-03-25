import {MmkvStorage} from '@/utils/mmkv';
import Reactotron, {networking} from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(mmkvPlugin({storage: MmkvStorage}))
  .use(networking())
  .connect(); // let's connect!
