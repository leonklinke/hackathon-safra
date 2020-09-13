'use strict'

/*
|--------------------------------------------------------------------------
| InvestmentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class InvestmentSeeder {
  async run() {
    await Factory
      .model('App/Models/Investment')
      .create({
        startup_id: 1,
        target_value: 1000000,
        minimum_value: 2000,
        reached_value: 250000,
        equity: 15,
        status: 'open',
        end_time: '2020-11-11 01:00:00',
      })
    await Factory
      .model('App/Models/Investment')
      .create({
        startup_id: 2,
        target_value: 5000000,
        minimum_value: 1000,
        reached_value: 0,
        equity: 20,
        status: 'open',
        end_time: '2020-12-12 01:00:00',
      })
    await Factory
      .model('App/Models/Investment')
      .create({
        startup_id: 3,
        target_value: 840000,
        minimum_value: 5000,
        reached_value: 870000,
        equity: 10,
        status: 'done',
        end_time: '2020-10-10 01:00:00',
      })
  }
}

module.exports = InvestmentSeeder
