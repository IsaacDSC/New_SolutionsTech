import ClientsTable from '../tables/Clients.table'

class ClientsModel {
    public async create(solutions: object) {
        try {
            const created = await ClientsTable.create(solutions)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async update(solutions: object, where: object) {
        try {
            const updated = await ClientsTable.update(solutions, { where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async searchAll(where: object) {
        try {
            const search = await ClientsTable.destroy({ where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


export default new ClientsModel