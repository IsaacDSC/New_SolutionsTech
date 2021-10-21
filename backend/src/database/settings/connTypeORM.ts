import "reflect-metadata";
import { createConnection } from "typeorm";

export const connection = async () => {
    try {
        const conn = await createConnection()
        console.log('Connected Database with Success!')
        return conn.manager
    } catch (error) {
        console.log(error)
        return error
    }

}