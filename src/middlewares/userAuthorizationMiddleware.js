import db from "../db.js";

export default async function userAutorizationMiddleware(req, res, next) {
    const user = req.body;

    let authorization = await db.users.findOne({email: req.body.email})
    if(!authorization){
        return res.sendStatus(401)
    }

    next()
}