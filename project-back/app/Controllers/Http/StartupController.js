'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Models/User")
const Startup = use("App/Models/Startup")
const Logger = use('Logger')
const moment = require('moment')
/**
 * Resourceful controller for interacting with startups
 */
class StartupController {
  /**
   * Show a list of all startups.
   * GET startups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Create/save a new startup.
   * POST startup
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request }) {
    let {
      user: userRequest,
      startup: startupRequest,
    } = request.only(['user', 'startup'])

    return await this.store({
      userRequest,
      startupRequest
    })
  }

  /**
   * Create/save a startup.
   * intern method
   *
   * @param {startupData} ctx
   */
  async store(startupData) {
    ///////////////////////////////////////////////////
    // before anything wee need to create this user   //
    ///////////////////////////////////////////////////
    if (!startupData.userRequest) throw "No user provided"
    startupData.userRequest.data = JSON.stringify(startupData.userRequest.data)
    const userResult = await User.create(startupData.userRequest)
    if (!userResult.id) {
      throw new Error('Error inserting user, email can be duplicated')
    }
    ///////////////////////////////////////////////////
    // creating startup   //
    ///////////////////////////////////////////////////
    //finding startup
    const startup = await Startup.findByOrFail('user_id', userResult.id)
    if (startupData.startupRequest) {
      //ajust data json
      if (!startupData.startupRequest.data) startupData.startupRequest.data = JSON.stringify(startupData.startupRequest.data)
      //mergin info
      startup.merge(startupData.startupRequest)
      //updating startup
      const resultstartup = await startup.save()
      if (!resultstartup) {
        throw new Error('Error inserting startup')
      }
    }
  }

  /**
   * Display a single startup.
   * GET startups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    let { id } = params
    //quering user information (id)
    let userQuery = User.query()
    if (id) {
      userQuery.where("id", id)
    }

    const userIds = await userQuery.pluck('id')
    if (userIds.length <= 0) {
      return []
    }
    //quering stratup information (from Id Found)
    let stratup = await Startup.query()
      .whereIn('user_id', userIds)
      .first()

    return stratup
  }

  /**
   * Update startup details.
   * PUT or PATCH startups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, request }) {
    let {
      user: userRequest,
      startup: startupRequest
    } = request.only(['user', 'startup'])
    //security verify
    if (auth.user.id !== Number(userRequest.id)) {
      return "You cannot see someone else's profile. Nice try, but not even close ;)"
    }
    try {
      if (!startupRequest) {
        throw new Error('Informações da startup não fornecidas')
      }
      const startupId = startupRequest.id

      await this.startupUpdate(startupRequest)
      if (userRequest) {
        await this.updateUser(userRequest)
      }

      return startupId
    } catch (error) {
      error.time = moment()
      Logger.error('Error StartupController:update', error)
      return { error: "Erro atualizando suas informações tente novamente mais tarde" }
    }
  }

  /**
   * Create/save a user.
   * intern method
   *
   * @param {userRequest} ctx
   */
  async updateUser(userRequest) {
    //finding user
    const user = await User.findOrFail(userRequest.id)
    //ajust data json
    if (userRequest.data != null) userRequest.data = JSON.stringify(userRequest.data)
    //mergin info
    user.merge(userRequest)
    //updating user
    const resultUser = await user.save()
    //returning
    if (!resultUser) {
      throw new Error("Erro atualizando usuário")
    }
    return
  }
  /**
  * Save a startup.
  * intern method
  *
  * @param {startupRequest} ctx
  */
  async startupUpdate(startupRequest) {
    //finding startup
    const startup = await Startup.findOrFail(startupRequest.id)
    //ajust data json
    if (!startupRequest.data) startupRequest.data = JSON.stringify(startupRequest.data)
    //mergin info
    startup.merge(startupRequest)
    //updating startup
    const resultStartup = await startup.save()
    //returning
    if (!resultStartup) {
      throw new Error("Erro atualizando startup")
    }
    return
  }
}

module.exports = StartupController
