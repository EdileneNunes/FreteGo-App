import express from "express";
import UserReview from '../models/UserReview.js';
import User from "../models/User.js";

const userreview = express.Router();

userreview.get('/', (req, res) => {
    res.send('Rota de UserReviews');
});

userreview.post("/register", async (req, res) => {

    const { idUser, comment, stars } = req.body;

    const alreadyExistsReview = await UserReview.findOne({ where: { idUser } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsReview) {
        return res.status(409).json({ message: "Review already registered!" });
    }

    const newReview = new Review({ idUser, comment, stars });
    const savedReview = await newReview.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the Review" });
    });

    if (savedReview) res.json({ message: "New Review Registered!" });
});

userreview.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const userreviews = await UserReview.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (userreviews) {
        return res.json({ userreviews })
    } else {
        return null
    }
})

export default userreview;  