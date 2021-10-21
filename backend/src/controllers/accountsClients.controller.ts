import { Request, Response } from 'express'

class AccountClientsController {
    public async account(req: Request, res: Response) {
        if (req.msg) res.status(500).send(req.msg)
        if (req.account) res.status(200).send(req.account)
    }
}


export default new AccountClientsController