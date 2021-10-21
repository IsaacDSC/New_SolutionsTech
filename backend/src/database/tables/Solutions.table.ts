const { Model, DataTypes, Op } = require('sequelize');
import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize/types';


class SolutionsTable extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            completeName: DataTypes.STRING,
            document: DataTypes.STRING,
            birthday: DataTypes.STRING,
            email: DataTypes.STRING,
            telephone: DataTypes.STRING,
            password: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            payment: DataTypes.FLOAT,
            points: DataTypes.INTEGER,
            wage: DataTypes.DATE,
            admin: DataTypes.BOOLEAN,
            dealer: DataTypes.BOOLEAN,
            others: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'solutions',

        })
    }


    static hashPassword(models: void) {
        this.beforeSave(async (client: any, options: any) => {
            const hash = await bcrypt.hash(client.password, 10)
            return client.password = hash
        })
    }

}


export default SolutionsTable
