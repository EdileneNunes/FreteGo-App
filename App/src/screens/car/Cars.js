import { StyleSheet, View, Image, useWindowDimensions, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api'
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/authContext";
import { Entypo } from "@expo/vector-icons";

const Cars = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [cars, setCars] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/car/findByUser', {
                params: {
                    idCar: state.idCar,
                }
            });
            console.log(list);
            setCars(list.data.cars)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={StyleSheet.view}>
            {state.isAdmin ? (
                <CustomButton text="Add Car" onPress={() => navigation.navigate("RegisterCar")} />
            ) : (
                <></>
            )}
            <FlatList
                data={cars}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeReview(item)}>
                                <Text style={styles.title}>{item.vehicleType}</Text>
                                <Text style={styles.item}>{item.model}</Text>
                                <Text style={styles.item}>{item.mark}</Text>
                                <Text style={styles.item}>{item.color}</Text>
                                <Text style={styles.item}>{item.licensePlate}</Text>
                                <Text style={styles.item}>{item.yearOfManufacture}</Text>
                                <Text style={styles.item}>{item.capacity}</Text>
                                <Text style={styles.item}>{item.canopyCar}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="khaki"
                                style={styles.icon}
                                onPress={() => newReview(item)}
                            />

                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default Cars;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#272933'
    },
    button: {
        marginBottom: 20
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
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
})