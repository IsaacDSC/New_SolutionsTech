import passport from 'passport'
import LocalStrategy from 'passport-local'
let Local = LocalStrategy.Strategy
import bcrypt from 'bcrypt'
//import table manageable accounts solutions
import SolutionsModel from '../../__old/tables/Solutions.table'

export default async function (passport: any) {
    passport.use(new Local({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, done) => {
        const solutions = await SolutionsModel.findOne({ where: { username: username } })
        if (!solutions) return done(null, false, { message: 'Esta conta não Existe' })
        bcrypt.compare(password, solutions.password, (err, corrected) => {
            if (corrected) return done(null, solutions)
            else return done(null, false, { message: "E-mail ou Senha incorreta" })
        })
    }))

    passport.serializeUser((user: any, done: any) => {
        //console.log('salvo id do usuario: ' + user.id)
        done(null, user.id)
    })

    passport.deserializeUser(async (id: string, done: any) => {
        //console.log('this:' + id)
        //done(id)
        SolutionsModel.findOne({ where: { id: id } }).then((user:object) => {
            done(null, user)
        })
    })
}