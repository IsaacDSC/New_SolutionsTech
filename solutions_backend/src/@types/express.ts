//criando req.status using typescript
declare namespace Express {
    export interface Request {
        status?: string
    }
    export interface Request {
        account?: object
    }
    export interface Request {
        msg?: string
    }
}
