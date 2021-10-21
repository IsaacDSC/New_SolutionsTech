import "reflect-metadata";
import { createConnection } from "typeorm";


export class AbstractProcedules {
    public async update(id: number, modify: object, AbstractEntity: any) {
        try {
            const conn = await createConnection()
            const updated = await conn.createQueryBuilder()
                .update(AbstractEntity)
                .set(modify)
                .where('id = :id', { id: id })
                .execute()

            return updated
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async delete(id: number, AbstractEntity: any) {
        try {
            const conn = await createConnection()
            const deleted = await conn.createQueryBuilder()
                .delete()
                .from(AbstractEntity)
                .where('id = :id', { id: id })
                .execute()

            return deleted

        } catch (error) {
            console.log(error)
            return false
        }
    }
}




