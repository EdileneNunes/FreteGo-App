import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from '../api'
import { Picker } from '@react-native-picker/picker';

const RegisterCar = ({ navigation }) => {
    const [CNH, setCNH] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [model, setModel] = useState('');
    const [mark, setMark] = useState('');
    const [color, setColor] = useState('');
    const [ licensePlate, setLicensePlate] = useState('');
    const [ yearOfManufacture, setYearOfManufacture] = useState('');
    const [ capacity, setCapacity] = useState('');
    const [canopyCar, setCanopyCar] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const data = await api.post('/car/register', {
                CNH: CNH,
                vehicleType: vehicleType,
                model: model,
                mark: mark,
                color: color,
                licensePlate: licensePlate,
                yearOfManufacture: yearOfManufacture,
                capacity: capacity,
                canopyCar: canopyCar

            });
            if (data.status === 200) {
                console.log(data)
                alert(data.data.message)
                navigation.navigate('Login')
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="CNH"
                value={CNH}
                setValue={setCNH}
            />

            <CustomInput
                placeholder="vehicleType"
                value={vehicleType}
                setValue={setVehicleType}
            />

            <CustomInput
                placeholder="model"
                value={model}
                setValue={setModel}
            />

            <CustomInput
                placeholder="mark"
                value={mark}
                setValue={setMark}
            />

            <CustomInput
                placeholder="color"
                value={color}
                setValue={setColor}
            />

            <CustomInput
                placeholder="licensePlate"
                value={licensePlate}
                setValue={setLicensePlate}
            />

            <CustomInput
                placeholder="yearOfManufacture"
                value={yearOfManufacture}
                setValue={setYearOfManufacture}
            />

            <CustomInput
                placeholder="capacity"
                value={capacity}
                setValue={setCapacity}
            />

            <CustomInput
                placeholder="canopyCar"
                value={canopyCar}
                setValue={setCanopyCar}
            />



            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'FFEEC0',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

export default RegisterCar;
