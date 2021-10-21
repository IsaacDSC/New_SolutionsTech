
import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
//import tables
import SolutionsProcedules from '../database/procedules/Solutions.Procedules'


// export =  function (passport) {
//     passport.use(new LocalStrategy({
//         usernameField: 'username',
//         passwordField: 'password'
//     }, async (username: string, password: string, done: any) => {
//         console.log(username, password)
//         const User = await SolutionsProcedules.searchOne("solutions.username = :username", { username: username })
//         if (!User) {
//             return done(null, false, { message: 'Usuário ou Senha não conferem' })
//         }
//         const match = await bcrypt.compare(password, User.password)
//         if (match) return done(null, User)
//         else return done(null, false, { message: "Usuário ou Senha não conferem" })

//     }))

//     passport.serializeUser((user: any, done: any) => {
//         done(null, user.id)
//     })

//     passport.deserializeUser(async (id: string, done: any) => {
//         const user = await SolutionsProcedules.searchOne("solutions.id = :id", { id: id })
//         done(null, user)
//     })
// }

export async function authenticate(req: Request, res: Response, next: NextFunction) {
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



