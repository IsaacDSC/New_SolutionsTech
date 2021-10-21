
import { Request, Response, NextFunction } from 'express'
import ReqMessage from '../helpers/ReqMessage'

class SolutionsController {
    public async account(req: Request, res: Response) {
        if (req.msg) {
            ReqMessage.success(req, res, req.msg, '/')
        }
        if (req.account) {
            res.redirect('/dashboard')
        }
    }
    public async logout(req: Request, res: Response) {

    }
    public async register(req: Request, res: Response) {

    }
    public async edit(req: Request, res: Response) {

    }
    public async delete(req: Request, res: Response) {

    }
}

export default new SolutionsController