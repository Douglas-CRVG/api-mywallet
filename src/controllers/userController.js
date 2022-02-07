import db from "../db.js";

async function records(req, res){
    const {authorization} = req.headers;
    try {
        const token = authorization?.replace('Bearer ', '');

        let record = await db.sessions.findOne({token});
        record = await db.records.find({userId: record.userId}).toArray();

        res.status(200).send(record);
    } catch (error) {
        res.send(500);
    }
}

export{
    records
}