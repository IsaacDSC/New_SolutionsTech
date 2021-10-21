import { Request, Response } from 'express'

class SettingsController {
    public async index(req: Request, res: Response) {
        res.render('dashboard/settings/settings', { layout: 'dashboard.hbs' })
    }

    public async profile(req: Request, res: Response) {
        res.render('dashboard/settings/profile', { layout: 'dashboard.hbs' })
    }

}


export default new SettingsController