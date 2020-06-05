'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalSchema extends Schema {
  up () {
    this.create('animals', (table) => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('prontuario_id')
        .unsigned()
        .references('id')
        .inTable('prontuarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nome', 50).notNullable()
      table.string('especie', 50).notNullable()
      table.string('raca', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('animals')
  }
}

module.exports = AnimalSchema
