import bcrypt from 'bcrypt';
//import { v4 as uuid } from 'uuid';
import db from '../db.js';

async function signUp(req, res) {
    const user = req.body;

    try {
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db.users.insertOne({ ...user, password: passwordHash })

        res.status(201).send(await db.users.find({}).toArray());
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}


export {
    signUp,
}