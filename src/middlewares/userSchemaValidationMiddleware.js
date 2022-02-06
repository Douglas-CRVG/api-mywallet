import userSchema from '../schemas/userSchema.js';

export default function userSchemaValidationMiddleware(req, res, next){
    const user = req.body;
    const validation = userSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}