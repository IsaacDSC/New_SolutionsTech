require('dotenv').config()
import { Sequelize } from 'sequelize'
import database from '../settings/database.json'

//import tables
import SolutionsTable from '../tables/Solutions.table'
import ClientsTable from '../tables/Clients.table'
import SolutionsAddressTable from '../tables/Address_solutions.table'
import ClientsAddressTable from '../tables/Address_clients.table'



export const connection = new Sequelize(
    "solutions",
    "dev",
    "secret",
    {
        dialect: "mysql",
        port: 3306,
        host: "0.0.0.0",
        define: {
            timestamps: true
        }
    }
)



SolutionsTable.init(connection)
ClientsTable.init(connection)
SolutionsAddressTable.init(connection)
ClientsAddressTable.init(connection)



