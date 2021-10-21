import SalesTable from "../database/tables/Sales.table"

class SalesModel{
    public async create(solutions: object) {
        try {
            const created = await SalesTable.create(solutions)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async update(solutions: object, where: object) {
        try {
            const updated = await SalesTable.update(solutions, { where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async searchAll(where: object) {
        try {
            const search = await SalesTable.destroy({ where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


export default new SalesModel