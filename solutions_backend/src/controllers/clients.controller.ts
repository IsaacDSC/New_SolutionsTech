import { Request, Response } from 'express'
import ClientsProcedules from "../database/procedules/Clients.Procedules"
import ReqMessage from '../helpers/ReqMessage'


class ClientsController {
    public async register(req: Request, res: Response) {
        const clients = await ClientsProcedules.Create(req.body)
        if (!clients) ReqMessage.error(req, res, 'Abstract.register.error', '/dashboard')
        return ReqMessage.success(req, res, 'Abstract.register.success', '/dashboard')
    }
    public async views() {
    }
    public async remove() {

    }

}


export default new ClientsController