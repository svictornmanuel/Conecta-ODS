import joi from 'joi'
import "dotenv/config"
import { env } from 'process';
import { error } from 'console';

export type ReturnEnvironmentVars = {
    PORT: number;
}

type ValidationEnvironmentVars = {
    error: joi.ValidationError | undefined
    value: ReturnEnvironmentVars 
}

function ValidateEnvVars(vars: NodeJS.ProcessEnv):ValidationEnvironmentVars{
    const envSchema = joi.object({
        PORT: joi.number().required()
    }).unknown(true);

    const {error, value} = envSchema.validate(vars);
    return {error, value}
}

const loadEnvVars = (): ReturnEnvironmentVars => {
    // Validar los datos
    const result = ValidateEnvVars(process.env)
    if (result.error){
        throw new Error(result.error.message)
    }

    const value = result.value;
    return{
        PORT: value.PORT,
    }
}

const Envs = loadEnvVars();
export default Envs;