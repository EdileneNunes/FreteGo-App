import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../../assets/images/Logo.png'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Message = ({ navigation }) => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>

            <View style={styles.main}>

            </View>

            <View style={styles.send}>
            <CustomInput
                placeholder="Hey!"
            />

            <CustomButton text="Send" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933',
        flex: 1,
        height:'100%'

    },
    text: {
        color: "#fff"
    },
    send:{
        height:'15%',
        width:'100%',
        backgroundColor: 'gray',
        flex: 1
    },
    main:{
        height:'85%',
        width:'100%',
        backgroundColor: 'gray',
        flex: 1
    }
});

export default Message;