'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
    table.increments()
    table
      .integer('cliente_id')
      .unsigned()
      .references('id')
      .inTable('clientes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table
      .integer('funcionario_id')
      .unsigned()
      .references('id')
      .inTable('funcionarios')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table
      .integer('endereco_id')
      .unsigned()
      .references('id')
      .inTable('enderecos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('username', 80).notNullable().unique()
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
