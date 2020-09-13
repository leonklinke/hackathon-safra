'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Interest = use("App/Models/Interest")
const Logger = use('Logger')
const moment = require('moment')

/**
 * Resourceful controller for interacting with interests
 */
class InterestController {
  /**
   * Show a list of all interests.
   * GET interests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Search interest.
   * GET interest/:status/:page
   *
   * @param {params} ctx
   */
  async get({ params }) {
    let { page, investment_id, user_id } = params
    let query = await Interest.query()
    if (investment_id) {
      query.where('investment_id', investment_id) //'open', 'timeout', 'done', 'canceled'
    }
    if (user_id) {
      query.where('user_id', user_id) //'open', 'timeout', 'done', 'canceled'
    }
    query.with('investment.startup.user').orderBy('id', 'DESC')
    const data = query.paginate((page > 0) ? page : 1);

    return data;
  }

  /**
   * Render a form to be used for creating a new interest.
   * GET interests/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async create({ request }) {
    let interestData = request.only([
      "user_id",
      "investment_id",
      "value",
    ])
    return await this.store(interestData)
  }

  /**
   * Create/save a interest.
   * intern method
   *
   * @param {interestData} ctx
   */
  async store(interestData) {
    try {
      const interest = await Interest.create(interestData)
      if (!interest.id) {
        return { error: 'Erro registrando interesse', data: interest }
      }
      return interest
    } catch (error) {
      error.time = moment()
      Logger.error('Error InterestController:store', error)
      return { error: "Houve algum problema na criação do interesse" }
    }
  }

  /**
   * Display a single interest.
   * GET interests/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    let { id } = params
    return await Interest
      .query()
      .where('id', id)
      .with('investment.startup.user')
      .first()
  }

  /**
   * Update interest details.
   * PUT or PATCH interests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request }) {
    const data = request.all()
    try {
      //finding interest
      const interest = await Interest.findOrFail(data.id)
      //mergin info
      interest.merge(data)
      //updating interest
      const result = await interest.save()
      //returning
      if (!result) {
        return { error: 'Erro atualizando o interesse', data: result }
      }
      return interest
    } catch (error) {
      error.time = moment()
      Logger.error('Error InterestController:update', error)
      return { error: 'Error atualizando o interesse' }
    }
  }

  /**
   * Delete a interest with id.
   * DELETE interests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async destroy({ request }) {
    const { id } = request.only(["id"])
    const interest = await Interest.findOrFail(id);
    await interest.delete();
    return id
  }
}

module.exports = InterestController
