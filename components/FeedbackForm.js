import * as React from 'react';
import { View,Text,TextInput,StyleSheet, ScrollView,Alert } from 'react-native';

export default function FeedbackForm() {

    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingSection}>  
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. We would love 
            to hear your experience with us! 
            </Text>
            <TextInput 
                value = {firstName} 
                onChange = {onChangeFirstName} 
                style = {styles.input} 
                placeholder = 'First Name'
                onFocus = {() => Alert.alert("First Name is focused")}
                onBlur = {() => Alert.alert('First Name is blurred')} 
                clearButtonMode='always' 
                />
            <TextInput 
                value = {secondName} 
                onChange = {onChangeSecondName} 
                style = {styles.input}
                placeholder = 'Last Name'
                />
            <TextInput 
                value = {message} 
                onChange = {onChangeMessage} 
                style = {styles.input} 
                placeholder = 'Please leave a feedback'
                />
        </ScrollView>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    input: {
        heigh: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        heigh: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 30,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    }

})