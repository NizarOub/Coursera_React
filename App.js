import { View } from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <WelcomeScreen/>
      {/* <MenuItems/> */}
    </View>
    <View style={{backgroundColor: '#495E57'}}>
      <LittleLemonFooter />
      </View></>
  );
}
