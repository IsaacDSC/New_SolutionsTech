import SolutionsTable from '../database/tables/Solutions.table'

class SolutionsModel {
    public async create(solutions: object) {
        try {
            const created = await SolutionsTable.create(solutions)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async update(solutions: object, where: object) {
        try {
            const updated = await SolutionsTable.update(solutions, { where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async searchAll(where: object) {
        try {
            const search = await SolutionsTable.destroy({ where: where })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


export default new SolutionsModel