'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicamentoSchema extends Schema {
  up () {
    this.create('medicamentos', (table) => {
      table.increments()
      table.double('preco_venda').notNullable()
      table.string('composicao', 150)
      table.string('laboratorio', 100).notNullable()
      table.string('tipo', 100)
      table.string('nome', 100).notNullable()
      table.double('preco_compra').notNullable()
      table.string('local_fisico', 100).notNullable()
      table.integer('quantidade_estoque').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicamentos')
  }
}

module.exports = MedicamentoSchema
