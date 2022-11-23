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

    const orderAlreadySent = await OrderRegistration.findOne({where: {idCar, idUser}}).catch(
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

orderregistration.get ('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const orderregistration = await OrderRegistration.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: Object}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );
    if(orderregistration){
        return res.json({ orderregistration })
    } else {
        return null
    }
})
orderregistration.get ('/findByObject', async (req, res) => {
    const idObject = req.query.idObject;
    const orderregistration = await OrderRegistration.findAll({
        where: {
            idObject: idObject
        },
        include: [{model: Car}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );
    if(orderregistration){
        return res.json({ orderregistration })
    } else {
        return null
    }
});
orderregistration.get ('/findByCar', async (req, res) => {
    const idCar = req.query.idCar;
    const orderregistration = await OrderRegistration.findAll({
        where: {
            idCar: idCar
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );
    if(orderregistration){
        return res.json({ orderregistration })
    } else {
        return null
    }
})

export default orderregistration;