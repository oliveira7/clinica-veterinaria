'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultaSchema extends Schema {
  up () {
    this.create('consultas', (table) => {
      table.increments()
      table
        .integer('sala_id')
        .unsigned()
        .references('id')
        .inTable('salas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animals')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('veterinario_id')
        .unsigned()
        .references('id')
        .inTable('funcionarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('horario').notNullable()
      table.string('data').notNullable()
      table.boolean('confirmacao').notNullable()
      table.boolean('finalizada').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('consultas')
  }
}

module.exports = ConsultaSchema
