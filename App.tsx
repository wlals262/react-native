import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedExample from './src/Pages/AnimatedExample';
import ChatScreen from './src/Pages/ChatScreen';
import 'react-native-devsettings';
import Router from './src/Router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // <AnimatedExample />
  );
}

export default App;
