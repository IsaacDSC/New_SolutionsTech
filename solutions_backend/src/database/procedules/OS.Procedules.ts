import { createConnection } from "typeorm";
import { AbstractProcedules } from './Abstract.Procedules'
import { IcreateOS } from '../Interfaces/OS.Interface'
import { OSEntity } from '../entity/OS'


class OSProcedules {
    public async Create(OS: IcreateOS) {
        try {
            const conn = createConnection()

            const createdOS = new OSEntity()
            createdOS.UUID = OS.UUID
            createdOS.timeDelivered = OS.timeDelivered
            createdOS.priceSale = OS.priceSale
            createdOS.installmentSale = OS.installmentSale
            createdOS.ok = OS.ok
            createdOS.active = OS.active
            createdOS.delivered = OS.delivered
            createdOS.support = OS.support
            createdOS.errorApp = OS.errorApp

            const response = await (await conn).manager.save(createdOS)
            return response

        } catch (error) {

        }
    }
    public async Edit(id: number, OS: object) {
        try {
            const editOS = new AbstractProcedules()
            const response = await editOS.update(id, OS, OSEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Delete(id: number) {
        try {
            const deleteOS = new AbstractProcedules()
            const response = await deleteOS.delete(id, OSEntity)
            return response

        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new OSProcedules
