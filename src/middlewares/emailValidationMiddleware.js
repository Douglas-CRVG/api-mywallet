import db from "../db.js";

export default async function emailValidationMiddleware(req, res, next) {
    const user = req.body;

    let invalidEmail = await db.users.find({}).toArray();
    invalidEmail = invalidEmail.map(iten => iten.email).includes(user.email);
    if(invalidEmail){
        return res.sendStatus(409)
    }

    next()
}