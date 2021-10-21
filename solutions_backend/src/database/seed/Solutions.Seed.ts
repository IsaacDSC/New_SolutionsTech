import "reflect-metadata";
import { createConnection } from "typeorm";

//import Entity's
//import { ApplicationEntity } from '../entity/Application'

//import Procedules
import solutionsProcedules from '../procedules/Solutions.Procedules'
//import ApplicationsProcedules from "../procedules/Applications.Procedules";


class SeedInit {

    public async solutionsSeed() {
        let user = {
            username: 'IsaacDSC',
            telephone: '24988180688',
            completeName: 'Isaac de Almeida Silva',
            email: 'isaac8.silva@hotmail.com',
            active: true,
            document: '17856362782',
            password: 'secret',
        }
        const createUser = await solutionsProcedules.Create(user)
        return createUser
        // if (created) console.log('Solutions seed created')
        // else console.log('\n\n Error in SeedInit.solutionsSeed')
    }

    // public async applicationsSeed() {
    //     const conn = await createConnection()

    //     const Apps = [{
    //         nameApp: 'Menu Digital',
    //         descriptionsApp: '',
    //         typeApp: 'SAS',
    //         costProduceApp: 1800,
    //         tester: false,
    //         activeApp: true,
    //         priceApp: 30.99,
    //         low_low: 20.99,
    //         low: 1,
    //         medium: 2,
    //         high: 3,
    //         high_high: 4,
    //     },
    //     {
    //         nameApp: 'E-commerce',
    //         descriptionsApp: '',
    //         typeApp: 'sale',
    //         costProduceApp: undefined,
    //         tester: false,
    //         activeApp: true,
    //         priceApp: 0,
    //         low_low: undefined,
    //         low: undefined,
    //         medium: undefined,
    //         high: undefined,
    //         high_high: undefined,
    //     },
    //     {
    //         nameApp: 'Marketing Tools',
    //         descriptionsApp: '',
    //         typeApp: 'SAS',
    //         costProduceApp: 1500,
    //         tester: false,
    //         activeApp: true,
    //         priceApp: 100,
    //         low_low: 15,
    //         low: 50,
    //         medium: 75,
    //         high: 95,
    //         high_high: undefined,
    //     },
    //     {
    //         nameApp: 'Integrações de Sistemas',
    //         descriptionsApp: '',
    //         typeApp: 'sale',
    //         costProduceApp: undefined,
    //         tester: false,
    //         activeApp: true,
    //         priceApp: 0,
    //         low_low: undefined,
    //         low: undefined,
    //         medium: undefined,
    //         high: undefined,
    //         high_high: undefined,
    //     }]
    //     Apps.forEach(element => {
    //         let app = new ApplicationEntity()
    //         app.nameApp = element.nameApp
    //         app.descriptionsApp = element.descriptionsApp
    //         app.typeApp = element.typeApp
    //         app.costProduceApp = element.costProduceApp
    //         app.tester = element.tester
    //         app.activeApp = element.activeApp
    //         app.priceApp = element.priceApp
    //         app.low_low = element.low_low
    //         app.low = element.low
    //         app.medium = element.medium
    //         app.high = element.high
    //         app.high_high = element.high_high

    //         conn.manager.save(app)
    //     })
    //     // const createdApp = await ApplicationsProcedules.Create(Apps)
    // }
}


export default new SeedInit