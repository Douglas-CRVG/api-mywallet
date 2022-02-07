import db from "../db.js";
import dayjs from "dayjs";

async function records(req, res){
    const {authorization} = req.headers;
    try {
        const token = authorization?.replace('Bearer ', '');
        const session = await db.sessions.findOne({token});

        const user = await db.users.findOne({_id: session.userId})
        const recordsList = await db.records.find({}).toArray();
        const arr = recordsList.filter(iten => iten.userId === user.email)

        res.status(200).send(arr)
    } catch (error) {
        res.sendStatus(500);
    }
}

async function record(req, res){
    const bodyRecord = req.body;
    const {authorization} = req.headers;
    try {
        const token = authorization.replace("Bearer ", "");
        const session = await db.sessions.findOne({token});
        const user = await db.users.findOne({_id: session.userId})
        await db.records.insertOne({...bodyRecord, userId: user.email, date: dayjs().locale('pt-br').format('DD/MM')});
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.send(500)
    }
}

export{
    records,
    record
}   