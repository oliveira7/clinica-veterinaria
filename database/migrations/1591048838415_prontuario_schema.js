'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProntuarioSchema extends Schema {
  up () {
    this.create('prontuarios', (table) => {
      table.increments()
      table.string('sinais_clinicos', 250)
      table.string('exames', 250)
      table.string('prescricoes', 250)
      table.double('peso')
      table.date('dose_vermifogo')
      table.date('ultimo_atendimento')
      table.timestamps()
    })
  }

  down () {
    this.drop('prontuarios')
  }
}

module.exports = ProntuarioSchema
