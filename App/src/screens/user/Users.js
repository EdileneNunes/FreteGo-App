import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api/index'
import { Entypo } from "@expo/vector-icons";
import CustomInput from '../../components/CustomInput';

const Users = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [users, setUsers] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findByUser', {
                params: {
                    idUser: state.idUser,
                }
            });
            console.log(list);
            setUsers(list.data.users)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>

            <Entypo name="user" size={60} color="#eee" />

            <CustomInput
                value={state.name}
                editable={false}
            />

            <CustomInput
                value={state.email}
                editable={false}
            />

            <CustomInput
                value={state.password}
                editable={false}
            />
        </View>

    )
}

export default Users

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#272933',
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center'
    },
    item: {
        margin: 5,
        fontSize: 15
    },
    icon: {
        margin: 10
    },
    myStarStyle: {
        color: 'orange',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        width: 50,
        fontSize: 50
    },
    myEmptyStarStyle: {
        color: 'gray',
        width: 50,
        fontSize: 50
    }
})