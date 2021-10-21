const dealers = require('../database/tables/Dealer')
class ResellersModels {
    async wageResellersRegister(name: string, document: string, email: string, telephone: string, CEP: string) {
        try {
            const dealersRegisted = await dealers.create({ name, document, email, telephone, CEP })
            if (dealersRegisted) return true
            else return false
        } catch (error) {
            console.log(error)
        }
    }
    async wageEmployeeds(point: number) {
        //get point
        let muchLowLowResellers = 100 == point
        let muchLowResellers = 200 == point
        let lowResellers = 300 == point
        let lowmedResellers = 400 == point
        let medResellers = 400 == point
        let Resellers = 500 == point
        let masterResellers = 1000 == point

        let scaleWagePoint = true
        switch (scaleWagePoint) {
            case muchLowLowResellers:
                return 'salário de 100/mês'
            case muchLowResellers:
                return 'salário de 200/mês'
            case lowResellers:
                return 'salário de 300/mês'
            case lowmedResellers:
                return 'salário de 400/mês'
            case medResellers:
                return 'salário de 400/mês'
            case Resellers:
                return 'salário de 500/mês'
            case masterResellers:
                return 'salário de 1500/mês'
        }
    }


}

module.exports = new ResellersModels