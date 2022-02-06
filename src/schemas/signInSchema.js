import joi from "joi";

const signInSchema = joi.object({
    email: joi.string().min(1).email().required(),
    password: joi.string().min(1).required()
});

export default signInSchema;