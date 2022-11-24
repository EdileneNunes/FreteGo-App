<<<<<<< HEAD
import { Jwt } from "jsonwebtoken";

const verifyToken = (token, res) => {
    Jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({authData})
            }
        }
    )
};

=======
import { Jwt } from "jsonwebtoken";

const verifyToken = (token, res) => {
    Jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({authData})
            }
        }
    )
};

>>>>>>> 4ff4c605da55a5b2ee722fd7c263fdbeafab771f
export default verifyToken;