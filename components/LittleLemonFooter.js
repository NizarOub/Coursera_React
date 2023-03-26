import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}>
        <Text
          style={footerStyles.text}>
            All rights reserved by Little Lemon, 2022 {' '}
        </Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
  container: {
    marginBottom : 10,
    backgroundColor: '#EE9972'
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  }
})
