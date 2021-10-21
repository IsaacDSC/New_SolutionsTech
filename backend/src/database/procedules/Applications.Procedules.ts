import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApplicationEntity } from '../entity/Application'
import { IcreateApplications } from '../Interfaces/Applications.Interface'
import { AbstractProcedules } from './Abstract.Procedules'

class ApplicationsProcedules {
    public async Create(app: IcreateApplications) {
        try {
            const conn = await createConnection()

            const createApp = new ApplicationEntity()
            createApp.nameApp = app.nameApp
            app.imageApp ? createApp.imageApp = app.imageApp : undefined
            createApp.descriptionsApp = app.descriptionsApp
            createApp.typeApp = app.typeApp
            app.activeApp ? createApp.activeApp = app.activeApp : true
            app.costProduceApp ? createApp.costProduceApp = app.costProduceApp : undefined
            createApp.priceApp = app.priceApp
            app.promotionApp ? createApp.promotionApp = app.promotionApp : undefined
            app.timeDeliveryApp ? createApp.timeDeliveryApp = app.timeDeliveryApp : undefined
            app.low_low ? createApp.low_low = app.low_low : undefined
            app.low ? createApp.low = app.low : undefined
            app.medium ? createApp.medium = app.medium : undefined
            app.high ? createApp.high = app.high : undefined
            app.high_high ? createApp.high_high = app.high_high : undefined
            app.tester ? createApp.tester = app.tester : false

            const created = await conn.manager.save(createApp)
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Edit(id: number, app: object) {
        try {
            const editApp = new AbstractProcedules()
            const response = await editApp.update(id, app, ApplicationEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
    public async Delete(id: number) {
        try {
            const deleteApp = new AbstractProcedules()
            const response = await deleteApp.delete(id, ApplicationEntity)
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new ApplicationsProcedules
