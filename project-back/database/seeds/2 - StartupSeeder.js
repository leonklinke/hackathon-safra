'use strict'

/*
|--------------------------------------------------------------------------
| StartupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Startup = use('App/Models/Startup')

class StartupSeeder {
  async run() {
    //startup 1
    await Factory
      .model('App/Models/User')
      .create({ type: 'startup', email: 'startup@safrai9.com.br', password: '123456', safra_secret: "a70413b9-8837-47df-885e-3d0449feabf5", safra_client_id: "b5fb1e3b36714ad0a08e9fd541d00160" })

    await Startup
      .query()
      .where('id', 1)
      .update({
        founded: 2016,
        location: "Bauru/SP - Brasil",
        this_year_revenue: 110000,
        last_year_revenue: 52000,
        som: 7200000000,
        team_size: 5
      })

    //startup 2
    await Factory
      .model('App/Models/User')
      .create({ type: 'startup', email: 'startup2@safrai9.com.br', password: '123456', safra_secret: "86a1a12e-595d-474e-8280-d0d26cbb53b7", safra_client_id: "9dffe873bf3b44b3ad067e87f354bef4" })

    await Startup
      .query()
      .where('id', 2)
      .update({
        founded: 2020,
        location: "Campinas/SP - Brasil",
        this_year_revenue: 1000000,
        last_year_revenue: 15000,
        som: 78200000000,
        team_size: 2
      })

    //startup 3
    await Factory
      .model('App/Models/User')
      .create({ type: 'startup', email: 'startup3@safrai9.com.br', password: '123456', safra_secret: "449818dd-fdf2-4897-b914-ea8b5921a0f2", safra_client_id: "efb4731160b54078ab7bf69cf1e1a5b7" })

    await Startup
      .query()
      .where('id', 3)
      .update({
        founded: 2008,
        location: "Belo horizonte/MG - Brasil",
        this_year_revenue: 890000,
        last_year_revenue: 750000,
        som: 1100000000,
        team_size: 25
      })
  }
}

module.exports = StartupSeeder
