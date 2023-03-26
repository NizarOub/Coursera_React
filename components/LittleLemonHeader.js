import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.text}>
        Little Lemon
      </Text>
    </View>
  );
}
const headerStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#EE9972'
  },
  text: {
    padding: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  }
})
