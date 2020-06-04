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
        .integer('avaliacao_id')
        .unsigned()
        .references('id')
        .inTable('avaliacoes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('prontuario_id')
        .unsigned()
        .references('id')
        .inTable('prontuarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.datetime('horario').notNullable()
      table.date('data').notNullable()
      table.boolean('confirmacao').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('consultas')
  }
}

module.exports = ConsultaSchema
