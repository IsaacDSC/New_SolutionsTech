
class ReqMessage {
    public async success(req, res, message, redirect) {
        req.flash('success_msg', await this.messages(message))
        res.redirect(redirect)
    }
    public async error(req, res, message, redirect) {
        req.flash('error_msg', await this.messages(message))
        res.redirect(redirect)
    }
    public async messages(classMethod) {
        switch (classMethod) {
            case 'Abstract.register.error':
                return 'Houve um problema ao registar, tente novamente mais tarde'

            case 'Abstract.register.success':
                return 'Registrado com sucesso!'

            default:
                return classMethod
        }
    }

}


export default new ReqMessage