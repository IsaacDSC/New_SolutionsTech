import { Request, Response } from 'express'
//import db from '../database/settings/Sql'
import SeedInit from '../database/seed/Solutions.Seed'
import SolutionsProcedules from '../database/procedules/Solutions.Procedules'
import bcrypt from 'bcrypt'

class HomeController {
    async index(req: Request, res: Response) {
        // let sql = 'show tables;'
        // const result = await db.promise().query(sql)
        // console.log(result[0])

        res.render('home/index')
    }
}

export default new HomeController
