'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionario extends Model {
  usuario () {
    return this.hasOne('App/Models/User', 'usuario_id', 'id');
  }
}

module.exports = Funcionario
