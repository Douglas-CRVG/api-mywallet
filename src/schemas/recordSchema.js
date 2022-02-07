import joi from "joi";

const recordSchema = joi.object({
    value: joi.number().min(1).required(),
    description: joi.string().min(1).required()
});

export default recordSchema;