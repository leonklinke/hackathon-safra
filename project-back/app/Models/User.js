'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const Startup = use("App/Models/Startup")

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
    this.addHook('afterCreate', async (userInstance) => {
      if (userInstance.type === 'startup') {
        // creating startup
        const startupData = { user_id: userInstance.id }
        const startupResult = await Startup.create(startupData)
        if (!startupResult.id) {
          throw new Error('Error inserting stratup')
        }
      }
    })
  }
  static get dates() {
    return super.dates.concat(['token_recovery_created_at'])
  }
  static formatDates(field, value) {
    if (field === 'token_recovery_created_at') {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
    return super.formatDates(field, value)
  }
  //Relations
  startup() {
    return this.belongsTo('App/Models/Startup')
  }
}

module.exports = User
