const { Model, DataTypes, Op } = require('sequelize');
import { Sequelize } from 'sequelize/types';


class SolutionsAddressTable extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            solutions_id: DataTypes.INTEGER,
            country: DataTypes.STRING,
            cep: DataTypes.STRING,
            state: DataTypes.STRING,
            district: DataTypes.STRING,
            address: DataTypes.STRING,
            number_house: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'address_solutions',

        })
    }
}


export default SolutionsAddressTable
