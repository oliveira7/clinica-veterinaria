'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {
  up () {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string('cargo', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionarios')
  }
}

module.exports = FuncionarioSchema
