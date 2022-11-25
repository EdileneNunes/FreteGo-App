import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useState, useContext } from 'react';
import CustomMessage from "../components/CustomMessage";
import CustomButton from "../components/CustomButton";

const Message = ({ navigation }) => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>

            <View style={styles.send}>
                <CustomMessage
                    placeholder="Escreva a mensagem..."
                />
            </View>

            <CustomButton text="Send" />
            
        </View>
    )
};

const styles = StyleSheet.create({

    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933',
        flex: 1,
        height: '100%'

    },
    text: {
        color: "#fff"
    },
    send: {
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
    },

});

export default Message;