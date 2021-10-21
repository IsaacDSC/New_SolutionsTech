const { Model, DataTypes, Op } = require('sequelize');
import { Sequelize } from 'sequelize/types';


class ClientsTable extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            application_id: DataTypes.INTEGER,
            completeName: DataTypes.STRING,
            companyName: DataTypes.STRING,
            profile: DataTypes.STRING,
            username: DataTypes.STRING,
            document: DataTypes.STRING,
            birthday: DataTypes.STRING,
            email: DataTypes.STRING,
            telephone: DataTypes.STRING,
            password: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            payment: DataTypes.FLOAT,
            day_payment: DataTypes.INTEGER,
            date_payment: DataTypes.DATE,
            marketing: DataTypes.BOOLEAN,
            low_low: DataTypes.BOOLEAN,
            low: DataTypes.BOOLEAN,
            medium: DataTypes.BOOLEAN,
            high: DataTypes.BOOLEAN,
            high_high: DataTypes.BOOLEAN,
            tester: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'clients',

        })
    }

}


export default ClientsTable
