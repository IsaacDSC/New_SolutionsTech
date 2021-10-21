import { Request, Response, NextFunction } from 'express'

export default {
    auth: function (req: Request, res: Response, next: NextFunction) {
        if (req.session.id) {
            console.log(req.sessionID )
            req.session.save()
            return next()
        } else {
            req.flash('error_msg', 'Necessário realizar o login para acessar a pagina solicitada!')
            res.redirect('/')
        }
    }
}