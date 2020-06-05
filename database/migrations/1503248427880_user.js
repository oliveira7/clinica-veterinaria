'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
    table.increments()
    table.string('email', 254).notNullable().unique()
    table.string('password', 60).notNullable()
    table.string('cpf', 20).notNullable().unique()
    table.string('telefone', 20)
    table.string('nome_completo', 120).notNullable()
    table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
