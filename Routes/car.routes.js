import express from "express";
import Car from '../models/Car.js';
import User from '../models/User.js'

const car = express.Router();

car.get('/', (req, res) => {
    res.send('Car Route');
});

car.post("/register", async (req, res) => {
    const { idUser, CNH, vehicleType, model, mark, color, licensePlate, yearOfManufacture, capacity, canopyCar } = req.body;

    const alreadyExistsCar = await Car.findOne({ where: { licensePlate } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsCar) {
        console.log("Placa existente: " + alreadyExistsCar);
        return res
        .status(409)
        .json({ message: "Placa já utilizada por outro Carro!" });
    }
    const newCar = new Car({ idUser, CNH, vehicleType, model, mark, color, licensePlate, yearOfManufacture, capacity, canopyCar });
    const savedCar = await newCar.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o Carro"});
    });

    if (savedCar) res.json({ message: "Carro cadastrado!" });
});


car.get('/findByUser', async (req, res) => {
    const idCar = req.query.idCar;
    const car = await Car.findOne({
        where: {
            idCar: idCar
        },
        include: [{ model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (car) {
        return res.json({ car })
    } else {
        return null
    }
})

export default car;