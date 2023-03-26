import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() 
{
    return(
    <View style={WelcomeStyles.container}>
        <ScrollView 
                indicatorStyle={"white"}
                style={WelcomeStyles.innerContainer}
        >
        <Text style={WelcomeStyles.headerText}>
            Welcome to Little Lemon
        </Text>
        <Text
        style={WelcomeStyles.mainText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
         We would love to hear more about your experience with us!
        </Text>
        </ScrollView>
    </View>
    
    );
}
const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    headerText: {
        color: '#EDEFEE',
        padding: 40,
        fontSize: 45,
        textAlign: 'center'
    },
    mainText: {
        fontSize: 40,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }

})