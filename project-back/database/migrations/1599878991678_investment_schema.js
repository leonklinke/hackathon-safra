'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentSchema extends Schema {
  up() {
    this.create('investments', (table) => {
      table.increments()
      table.integer('stratup_id').unsigned().notNullable()
        .references('id')
        .inTable('startups')
        .onDelete('CASCADE')
      table.decimal('target_value', 2).unsigned().notNullable()
      table.decimal('minimum_value', 2)
      table.decimal('reached_value', 2)
      table.decimal('equity', 2).unsigned().notNullable()
      table.enu('status', ['open', 'timeout', 'done', 'canceled']).defaultTo('open')
      table.timestamp('end_time')
      table.timestamps()
    })
  }

  down() {
    this.drop('investments')
  }
}

module.exports = InvestmentSchema
