'use strict'

/*
|--------------------------------------------------------------------------
| InterestSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class InterestSeeder {
  async run() {
    await Factory
      .model('App/Models/Interest')
      .create({
        user_id: 1,
        investment_id: 1,
        value: 150000
      })
    await Factory
      .model('App/Models/Interest')
      .create({
        user_id: 2,
        investment_id: 1,
        value: 5000
      })
    await Factory
      .model('App/Models/Interest')
      .create({
        user_id: 3,
        investment_id: 1,
        value: 95000
      })
    await Factory
      .model('App/Models/Interest')
      .create({
        user_id: 4,
        investment_id: 3,
        value: 420000
      })
    await Factory
      .model('App/Models/Interest')
      .create({
        user_id: 1,
        investment_id: 3,
        value: 420000
      })
  }
}

module.exports = InterestSeeder
