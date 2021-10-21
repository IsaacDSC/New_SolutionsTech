import { Router } from 'express'
const router = Router()

//middleware
import auth from '../middlewares/auth'
const Auth = auth.auth
import { authenticate } from '../middlewares/checkCredencials'
import { authClient } from '../middlewares/authClients'

//IMPORT CONTROLLERS
import homeController from '../controllers/homeController'
import solutionsController from '../controllers/solutions.controller'
import dashboardController from '../controllers/dashboard.controller'
import clientsController from '../controllers/clients.controller'
import accountsClientsController from '../controllers/accountsClients.controller'

//NAVIGATION'S ROUTES
router.get('/', homeController.index)

//dashboard
router.get('/dashboard', Auth, dashboardController.index)

//REGISTER CLIENTS
router.post('/create/clients', clientsController.register)

//Accounts Routes
router.post('/account/solutions', authenticate, solutionsController.account)

// ACCOUNT API CONTROLLER APPLICATION CLIENTS
router.post('/account/client', authClient, accountsClientsController.account)



export default router

