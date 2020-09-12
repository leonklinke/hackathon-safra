'use strict'

const User = use("App/Models/User");
const Logger = use('Logger')
const moment = require('moment')

class UserController {
    async show({ auth }) {
        const { id } = auth.user
        const user = await User.query()
            .where('id', id)
            .with('startup')
            .first()

        return user
    }
    async destroy({ request }) {
        const { id } = request.only(["id"])
        const user = await User.findOrFail(id);
        await user.delete();
        return id
    }
    async login({ auth, request }) {
        const { email, password } = request.only(["email", "password"])
        try {
            const response = await auth.attempt(email, password)
            const userData = await User.query()
                .where('email', email)
                .with('startup')
                .first()

            return {
                token: response.token,
                user: userData
            }
        } catch (error) {
            if (error.uidField) return { error: "Usuário não encontrado" }
            if (error.passwordField) return { error: "Senha incorreta" }
            error.time = moment()
            Logger.error('Error UserController:login', error)
            return { error: "Houve algum problema no processo de login" }
        }
    }
    async create({ request }) {
        let userData = request.only(["name", "email", "code", "phone", "password", "type"])
        return await this.store(userData)
    }
    async store(userData) {
        try {
            const user = await User.create(userData)
            if (!user.id) {
                return { error: 'Erro ao inserir usuário', data: user }
            }
            return user
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return { error: "Cadastro inválido, este EMAIL já foi cadastrado e não pode ser duplicado." }
            }
            error.time = moment()
            Logger.error('Error UserController:store', error)
            return { error: "Houve algum problema na criação do usuário" }
        }
    }
    async update({ auth, request }) {
        //getting Request
        let data = request.only([
            'id',
            'name',
            'code',
            'email',
            'phone'
        ])
        //security verify
        if (auth.user.id !== Number(data.id)) {
            if (auth.user.type !== 'admin') {
                return "You cannot see someone else's profile. Nice try ;)"
            }
        }
        try {
            //finding user
            const user = await User.findOrFail(auth.user.id)
            //ajust data json
            if (data.data != null) data.data = JSON.stringify(data.data)
            //mergin info
            user.merge(data)
            //updating user
            const result = await user.save()
            //returning
            if (!result) {
                return { error: 'Error atualizando usuário', data: result }
            }
            return user
        } catch (error) {
            error.time = moment()
            Logger.error('Error UserController:update', error)
            return { error: 'Error atualizando usuário' }
        }
    }
    async passwordUpdate({ auth, request }) {
        //getting Request
        let { password, oldPassword } = request.only([
            'oldPassword',
            'password',
        ])
        //finding user
        const user = auth.current.user
        // verify if current password matches
        const verifyPassword = await Hash.verify(
            oldPassword,
            user.password
        )
        if (!verifyPassword) {
            return { error: 'Senha antiga incorreta', data: verifyPassword }
        }
        //saving new password
        user.password = password
        const result = await user.save()
        const refreshToken = await auth
            .withRefreshToken()
            .attempt(user.email, password)
        //returning
        if (!refreshToken) {
            return { error: 'Error atualizando senha', data: result }
        }
        return refreshToken
    }

    //recover password
    async sendMail(user) {
        await Mail.send('emails.recover', { user }, (message) => {
            message
                .to(user.email)
                .from('naoresponda@bancosafra.com.br')
                .subject('Recuperação de senha')
        })
    }
    async startPasswordRecovery({ request }) {
        let { email } = request.only(["email"])
        try {
            const user = await User.findByOrFail('email', email)
            if (!user.id) {
                return { error: 'Erro recuperando senha, usuário não encontrado.', data: user }
            }
            // generating token
            const token = await crypto.randomBytes(10).toString('hex')
            user.token_recovery = await token.toString()
            user.token_recovery_created_at = new Date()
            await user.save()
            // sending recover mail
            this.sendMail(user)

            return user.email
        } catch (error) {
            error.time = moment()
            Logger.error('Error UserController:startPasswordRecovery', error)
            return { error: "Não foi possível enviar o email de recuperação, tem certeza que usou esse email para se cadastra? Tente novamente mais tarde" }
        }
    }
    async recoverPassword({ request, params }) {
        const tokenProvided = params.token // retrieving token in URL
        const emailRequesting = params.email // email requesting recovery

        const { password, email, token } = request.only(['password', 'email', 'toekn'])

        try {
            // looking for user with the registered email
            const user = await User.findByOrFail('email', email)

            // checking if token is still the same
            // just to make sure that the user is not using an old link
            // after requesting the password recovery again
            if (!token === user.token_recovery) {
                return { error: "Token expirado, esse token já foi usado" }
            }

            // checking if token is still valid (48 hour period)
            const tokenExpired = moment()
                .subtract(2, 'days')
                .isAfter(user.token_recovery_created_at)

            if (tokenExpired) {
                return { error: "Token expirado, você precisa fazer esse processo do início" }
            }

            // saving new password
            user.password = password

            // deleting current token
            user.token_recovery = null
            user.token_recovery_created_at = new Date()

            // persisting data (saving)
            await user.save()

            return user
        } catch (error) {
            error.time = moment()
            Logger.error('Error UserController:recoverPassword', error)
            return { error: "Houve algum erro no processo de redefinição, tente novamente mais tarde" }
        }
    }

    dashboard({ auth }) {
        return { user: auth.user }
    }


}

module.exports = UserController
