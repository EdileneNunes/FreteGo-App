//registrar a rota para cadastrar o pedido do cliente

import express from "express";
import OrderRegistration from '../models/Order_registration';
import User from "../models/User";
import Object from "../models/Object";
import Car from "../models/Car";


const orderregistration = express.Router();

orderregistration.get('/', (req, res) => {
    res.send('Rota de Order Registration');
});

orderregistration.post("/order-registration", async (req, res) => {

    const {idUser, idObject, idCar, starting_point, arrival_point} = req.body;

    const orderAlreadySent = await OrderRegistration.findOne({where: {idCar}}).catch(
        (err) => {
            console.log("Error", err)
        }
    );
    if (orderAlreadySent) {
        alert("Você já agendou com essa viatura!");
    }

    const newOrderAlreadySent = new OrderRegistration ({idUser, idObject, idCar, starting_point, arrival_point});
    const savedOrderAlreadySent = await newOrderAlreadySent.save().catch((err) => {
        alert("Ops! Houve um erro, tenta novamente...")
        res.status(500).json({error: "Desculpa, mas o pedido não foi registrado!" });
    });
    if (savedOrderAlreadySent){
        alert("Novo pedifo registrado")
        res.json({ message: "Foi com sucesso!" })
    }
});

orderregistration.get ('/findByOrderRegistration')