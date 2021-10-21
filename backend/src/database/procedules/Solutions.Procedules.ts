import { SolutionsEntity } from '../entity/Solutions'
import { createConnection, getRepository } from "typeorm";
import { IcreateSolutions } from '../Interfaces/Solutions.Interfaces'
import { AbstractProcedules } from './Abstract.Procedules'

import generateHash from '../../helpers/generateHash'

//,
class SolutionsProcedules {
    public async searchOne(where: object,) {
        try {
            const conn = getRepository(SolutionsEntity)
            const search = await conn.findOne(where)
            return search
        } catch (error) {
            console.log(error)
            return false
        }
    }

    public async Create(user: IcreateSolutions) {
        try {
            const conn = await getRepository(SolutionsEntity)

            const pass = await generateHash(user.password)

            const createUser = new SolutionsEntity()
            createUser.completeName = user.completeName
            createUser.document = user.document
            user.birthday ? createUser.birthday = user.birthday : new Date().getTime()
            createUser.email = user.email
            createUser.telephone = user.telephone
            createUser.username = user.username
            createUser.password = pass
            createUser.active = user.active
            user.payment ? createUser.payment = user.payment : 0
            user.points ? createUser.points = user.points : 0
            user.wage ? createUser.wage = user.wage : false
            user.admin ? createUser.admin = user.admin : false
            user.dealer ? createUser.dealer = user.dealer : false
            user.others ? createUser.others = user.others : false

            const created = conn.manager.save(createUser)
            return created
        } catch (error) {
            console.log(error)
            return false
        }

    }
    public async Edit(id: number, user: object) {
        try {
            const editSolutions = new AbstractProcedules()
            const response = await editSolutions.update(id, user, SolutionsEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Delete(id: number) {
        try {
            const deleteSolutions = new AbstractProcedules()
            const response = await deleteSolutions.delete(id, SolutionsEntity)
            return response

        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new SolutionsProcedules


