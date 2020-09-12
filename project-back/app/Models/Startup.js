'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Startup extends Model {
  //getters
  getData(data) {
    return JSON.parse(data)
  }
  //Relations
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Startup
