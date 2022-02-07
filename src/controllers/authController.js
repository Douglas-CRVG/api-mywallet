import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';

async function signUp(req, res) {
    const user = req.body;

    try {
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db.users.insertOne({ ...user, password: passwordHash })

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500)
    }
}

async function signIn(req, res) {
    const user = req.body;
    try {
        const userIncluded = await db.users.findOne({ email: user.email });

        if (userIncluded && bcrypt.compareSync(user.password, userIncluded.password)) {
            const token = uuid();
            await db.sessions.insertOne({ token, userId: userIncluded._id });

            res.status(200).send({token});
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}


export {
    signUp,
    signIn
}