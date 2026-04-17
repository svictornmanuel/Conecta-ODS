import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User"
import envs from "./environment-vars";
import { env } from "process";
import { error } from 'console';

dotenv.config();
    export const AppDataSource = new DataSource ({
        type: 'mysql',
        port: Number(envs.DB_PORT),
        username: envs.DB_USER,
        password: envs.DB_PASSWORD,
        database: envs.DB_NAME,
        synchronize: true,
        logging: true,
        entities: [User],
    });

export const conectDB = async() => {
    try {
        await AppDataSource.initialize();
        console.log("Conectado a la base de datos MySQL");

    } catch (error) {
        console.error("Error al conectar con la base de datos: ", error);
        process.exit(1);
    }
}