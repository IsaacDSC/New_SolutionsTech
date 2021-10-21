import "reflect-metadata";
import { createConnection } from "typeorm";
import { ClientsEntity } from '../entity/Clients'
import { IcreateInterface } from '../Interfaces/Clients.Interface'
import { AbstractProcedules } from './Abstract.Procedules'

class ClientsProcedules {

    public async Create(clients: IcreateInterface) {
        try {
            const conn = await createConnection()

            const createClient = await new ClientsEntity()
            createClient.application_id = clients.application_id
            createClient.completeName = clients.completeName
            createClient.companyName = clients.companyName
            clients.profile ? createClient.profile = clients.profile : undefined
            createClient.username = clients.username
            createClient.document = clients.document
            clients.birthday ? createClient.birthday = clients.birthday : undefined
            createClient.email = clients.email
            createClient.telephone = clients.telephone
            createClient.password = clients.password
            clients.active ? createClient.active = clients.active : undefined
            clients.payment ? createClient.payment = clients.payment : undefined
            clients.day_payment ? createClient.day_payment = clients.day_payment : undefined
            clients.date_payment ? createClient.date_payment = clients.date_payment : undefined
            createClient.type = clients.type

            const created = conn.manager.save(createClient)
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Edit(id: number, client: object) {
        try {
            const editClient = new AbstractProcedules()
            const response = await editClient.update(id, client, ClientsEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Delete(id: number) {
        try {
            const deletedClient = new AbstractProcedules()
            const response = await deletedClient.delete(id, ClientsEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }

    public async ViewsAll() {
        try {

            const conn = await createConnection()
            const allClients = await conn.createQueryBuilder()
                .select('clients')
                .from(ClientsEntity, 'clients')
                .execute()

            return allClients

        } catch (error) {

            console.log(error)
            return false

        }
    }
}

export default new ClientsProcedules
