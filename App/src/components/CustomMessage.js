import {View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
 
const CustomMessage = ({ value, setValue, placeholder, secureTextEntry, editable }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dedede",
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 5
    },
    input: {
        padding: 15,
        fontWeight: 'bold',
        color: '#272933'
    }
})
 
export default CustomMessage;
