'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('av_experiencia')
      table.integer('av_veterinario')
      table.integer('av_instalacao')
      table.integer('av_atendimento')
      table.text('feedback')
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaoSchema
