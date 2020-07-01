'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Animal extends Model {
  cliente () {
    return this.hasOne('App/Models/Cliente', 'cliente_id', 'id');
  }
  prontuario () {
    return this.hasOne('App/Models/Prontuario', 'prontuario_id', 'id');
  }
}

module.exports = Animal
