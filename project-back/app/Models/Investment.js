'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Investment extends Model {
  static get dates() {
    return super.dates.concat(['end_date'])
  }
  static formatDates(field, value) {
    if (field === 'end_date') {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
    return super.formatDates(field, value)
  }
  //Relations
  startup() {
    return this.belongsTo('App/Models/Startup')
  }
}

module.exports = Investment
