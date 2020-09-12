'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StartupSchema extends Schema {
  up() {
    this.create('startups', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.timestamp('birthday')
      table.json('data').comment('site:string, description:string, intro:string, founders:{name:string,role:string,linkedin:string}, video:string')
      table.string('location', 254).comment('city/UF - Country')
      table.decimal('this_year_revenue', 2).comment('expected revenue for this year')
      table.decimal('last_year_revenue', 2).comment('last year real revenue')
      table.decimal('som', 15, 2).comment('Serviceable Obtainable Market Size R$')
      table.integer('team_size').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('startups')
  }
}

module.exports = StartupSchema
