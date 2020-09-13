'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Investment = use("App/Models/Investment")
const Logger = use('Logger')
const moment = require('moment')

/**
 * Resourceful controller for interacting with investments
 */
class InvestmentController {
  /**
   * Show a list of all investments.
   * GET investments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

  }
  /**
   * Search investments.
   * GET investments/:status/:page
   *
   * @param {params} ctx
   */
  async get({ params }) {
    let { page, status } = params
    let query = Investment.query()
      .with('startup.user')
    if (status) {
      query.where('status', status) //'open', 'timeout', 'done', 'canceled'
    }
    query.orderBy('id', 'DESC')
    const data = await query.paginate((page > 0) ? page : 1);

    return data;
  }

  /**
   * Creating a new investment.
   * POST investments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async create({ request }) {
    let investmentData = request.only([
      "startup_id",
      "target_value",
      "minimum_value",
      "reached_value",
      "equity",
      "end_time",
    ])
    return await this.store(investmentData)
  }

  /**
   * Create/save a investment.
   * intern method
   *
   * @param {investmentData} ctx
   */
  async store(investmentData) {
    try {
      const investment = await Investment.create(investmentData)
      if (!investment.id) {
        return { error: 'Erro inserindo investimento', data: investment }
      }
      return investment
    } catch (error) {
      error.time = moment()
      Logger.error('Error InvestmentController:store', error)
      return { error: "Houve algum problema na criação do investimento" }
    }
  }

  /**
   * Display a single investment.
   * GET investments/:id
   *
   * @param {params} ctx
   */
  async show({ params }) {
    let { id } = params
    return await Investment
      .query()
      .where('id', id)
      .with('startup.user')
      .first()
  }


  /**
   * Update investment details.
   * PUT or PATCH investments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update({ request }) {
    const data = request.all()
    try {
      //finding invetment
      const invetment = await Investment.findOrFail(data.id)
      //mergin info
      invetment.merge(data)
      //updating invetment
      const result = await invetment.save()
      //returning
      if (!result) {
        return { error: 'Error atualizando o investimento', data: result }
      }
      return invetment
    } catch (error) {
      error.time = moment()
      Logger.error('Error InvestmentController:update', error)
      return { error: 'Error atualizando o investimento' }
    }
  }

  /**
   * Delete a investment with id.
   * DELETE investments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async destroy({ request }) {
    const { id } = request.only(["id"])
    const investment = await Investment.findOrFail(id);
    await investment.delete();
    return id
  }
}

module.exports = InvestmentController
