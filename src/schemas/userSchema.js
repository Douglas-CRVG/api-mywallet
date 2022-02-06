import joi from "joi";

const userSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().min(1).email().required(),
    password: joi.string().min(1).required(),
});

export default userSchema;