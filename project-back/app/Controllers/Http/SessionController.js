'use strict'

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth
      .attempt(email, password)

    return token
  }
  async recreate({ request, auth }) {
    const { refreshToken } = request.only(['refreshToken'])

    const token = await auth
      .generateForRefreshToken(refreshToken)

    return token
  }
}

module.exports = SessionController
