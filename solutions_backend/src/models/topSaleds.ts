class TopSales {
    public async create(solutions: object) {
        try {
            const created = 'connection'
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async update(solutions: object, where: object) {
        try {
            const updated = 'connection'
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async searchAll(where: object) {
        try {
            const search = 'connection'
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


export default new TopSales