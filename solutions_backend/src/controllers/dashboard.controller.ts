import { Request, Response } from 'express'

class DashboardController {
    public async index(req: Request, res: Response){
        res.render('dashboard/index', {layout: 'dashboard.hbs'})
    }
}

export default new DashboardController