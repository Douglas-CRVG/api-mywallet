import signInSchema from "../schemas/signInSchema.js";

export default function signInSchemaValidationMiddleware(req, res, next){
    const user = req.body;
    const validation = signInSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}