'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
  usuario () {
    return this.hasOne('App/Models/User', 'usuario_id', 'id');
  }
 
  animais () {
    return this.hasMany('App/Models/Animal', 'cliente_id', 'id');
  }
}

module.exports = Cliente
