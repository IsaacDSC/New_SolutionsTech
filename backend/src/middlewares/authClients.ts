
import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
//import tables
import SolutionsProcedules from '../database/procedules/Solutions.Procedules'

export async function authClient(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body
    const User = await SolutionsProcedules.searchOne({ username: username })
    if (!User) {
        req.msg = 'Usuário ou Senha não conferem'
        return next()
    }
    const match = await bcrypt.compare(password, User.password)
    if (match) {
        req.account = User
        return next()
    }
    else {
        req.msg = "Usuário ou SENHA não conferem"
        return next()
    }
}



