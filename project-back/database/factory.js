'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  return {
    name: faker.name(),
    phone: faker.phone(),
    email: (!data.email ? faker.email() : data.email),
    password: (!data.password ? faker.password() : data.password),
    code: faker.cpf(),
    type: data.type,
    safra_client_id: data.safra_client_id,
    safra_secret: data.safra_secret,
  }
})
Factory.blueprint('App/Models/Startup', async (faker, i, data) => {
  return {
    birthday: faker.date({ year: 2015 }),
    location: faker.address(),
    this_year_revenue: faker.floating({ min: 0, max: 5000 }),
    last_year_revenue: faker.floating({ min: 0, max: 1000000 }),
    som: faker.floating({ min: 5000000, max: 80000000000 }),
    team_size: faker.natural({ min: 1, max: 50 })
  }
})
Factory.blueprint('App/Models/Investment', async (faker, i, data) => {
  return {
    startup_id: data.startup_id,
    target_value: data.target_value,
    minimum_value: data.minimum_value,
    reached_value: data.reached_value,
    equity: data.equity,
    status: data.status,
    end_time: data.end_time
  }
})
Factory.blueprint('App/Models/Interest', async (faker, i, data) => {
  return {
    user_id: data.user_id,
    investment_id: data.investment_id,
    value: data.value,
  }
})
