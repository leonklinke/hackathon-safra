'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('code', 254)
      table.string('phone', 254)
      table.string('safra_client_id', 254)
      table.string('safra_secret', 254)
      table.enu('type', ['investor', 'startup', 'admin']).notNullable().defaultTo('investor')
      table.string('token', 254)
      table.string('token_recovery').comment('token used to recover password')
      table.timestamp('token_recovery_created_at').comment('token used to recover password')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
