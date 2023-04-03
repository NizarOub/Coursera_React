import { View, StyleSheet } from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems_SectionList';
import WelcomeScreen from './WelcomeScreen';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './LoginScreen';

export default function App() {

  return (
    <>
    <View
      style={styles.container}>
      <LittleLemonHeader />
      {/* <WelcomeScreen/> */}
      {/* <MenuItems/> */}
      {/* <FeedbackForm/> */}
      <LoginScreen/>
    </View>
    <View style={styles.footerContainer}>
      <LittleLemonFooter />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
})