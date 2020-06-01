'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompraMedicamentoSchema extends Schema {
  up () {
    this.create('compra_medicamentos', (table) => {
      table.increments()
      table
        .integer('compra_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('medicamento_id')
        .unsigned()
        .references('id')
        .inTable('medicamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('compra_medicamentos')
  }
}

module.exports = CompraMedicamentoSchema
