import recordSchema from '../schemas/recordSchema.js';

export default function recordSchemaValidationMiddleware(req, res, next){
    const user = req.body;
    const validation = recordSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}