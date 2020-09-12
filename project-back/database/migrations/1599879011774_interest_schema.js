'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InterestSchema extends Schema {
  up() {
    this.create('interests', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
        .references('id')
        .inTable('users')
      table.integer('investment_id').unsigned().notNullable()
        .references('id')
        .inTable('investments')
        .onDelete('CASCADE')
      table.decimal('value', 2)
      table.timestamps()
    })
  }

  down() {
    this.drop('interests')
  }
}

module.exports = InterestSchema
