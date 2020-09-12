'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run() {
    await Factory
      .model('App/Models/User')
      .create({ type: 'investor', password: '123456', email: 'investor@safrai9.com.br', safra_secret: "1a2075e3-b15e-4324-902c-0f12f8f08082", safra_client_id: "f9d3cd9600874ac2803d03ca709b78eb" })
    await Factory
      .model('App/Models/User')
      .create({ type: 'investor', password: '123456', email: 'investor2@safrai9.com.br', safra_secret: "31591ad2-1cbd-44e9-a01c-1bbcc0985544", safra_client_id: "e33b611a81204f318a15d5728b998661" })
    await Factory
      .model('App/Models/User')
      .create({ type: 'investor', password: '123456', email: 'investor3@safrai9.com.br', safra_secret: "46a29eb0-40d9-432e-a63b-81892110ae78", safra_client_id: "bfcfae0f5b3343e0b357188435682fee" })
    await Factory
      .model('App/Models/User')
      .create({ type: 'investor', password: '123456', email: 'investor4@safrai9.com.br', safra_secret: "18286459-3c66-4bb5-943d-00dcb4fdb76d", safra_client_id: "a8e3bab206d24a89b9b113cc493a2350" })
    await Factory
      .model('App/Models/User')
      .create({ type: 'investor', password: '123456', email: 'investor5@safrai9.com.br', safra_secret: "", safra_client_id: "" })
  }
}

module.exports = UserSeeder
