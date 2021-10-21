import "reflect-metadata";
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import router from '../routes/Routes'
import hbs from 'express-handlebars'
import path from 'path'
import session from 'express-session'
import flash from 'express-flash'
import cors from 'cors'
import { Request, Response, NextFunction } from 'express'
import { createConnection } from "typeorm";
import passport from 'passport';
// import tester from '../middlewares/checkCredencials'
// tester(passport)

//import seeders
import SeedInit from '../database/seed/Solutions.Seed'



class App {
    public express: express.Application
    constructor() {
        this.express = express()
        this.middlewares()
        this.session()
        //this.passport()
        this.flash()
        this.engine()
        this.routes()
        this.initializeApp()
        this.database()
    }
    private session(): void {
        this.express.use(session({
            secret: process.env.SECRETKEY_SESSION || 'somesecrettoken',
            resave: true,
            saveUninitialized: true
        }))
    }
    public passport(): void {
        this.express.use(passport.initialize())
        this.express.use(passport.session())
        require('../middlewares/checkCredencials')(passport)
    }
    private flash(): void {
        this.express.use(flash())
        this.express.use((req: Request, res: Response, next: NextFunction) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.message = req.flash('message')
            res.locals.error = req.flash('error')
            next()
        })
    }
    private middlewares(): void {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(express.static(path.join(__dirname, '../', 'public')))
    }
    private routes(): void {
        this.express.use(router)
    }
    private engine(): void {
        this.express.engine('hbs', hbs({
            defaultLayout: 'main.hbs',
            extname: 'hbs',
        }));
        this.express.set('view engine', 'hbs');
        this.express.set('views', path.join(__dirname, '../', '/views/'))
    }
    private database() {
        createConnection().then(() => {
            console.log('Connected database is a successfully')
        }).catch((err) => {
            console.log(err)
        })
    }
    private initializeApp() {
        let restart = 0
        const dataInit = process.env.APP_INITIALIZE == 'true'
        dataInit && restart == 0 ? SeedInit.applicationsSeed() && SeedInit.solutionsSeed() && restart++ : 'Not news application'
    }
}
export default new App().express

