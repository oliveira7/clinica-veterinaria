'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompraSchema extends Schema {
  up () {
    this.create('compras', (table) => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('quantidade_medicamentos', 250)
      table.string('valor_total', 250)
      table.timestamps()
    })
  }

  down () {
    this.drop('compras')
  }
}

module.exports = CompraSchema
