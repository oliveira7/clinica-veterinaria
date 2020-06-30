'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Consulta extends Model {
  
  funcionario () {
    return this.hasOne('App/Models/Funcionario', 'veterinario_id', 'id');
  }

  animal () {
    return this.hasOne('App/Models/Animal', 'animal_id', 'id');
  }

  sala () {
    return this.hasOne('App/Models/Sala', 'sala_id', 'id');
  }
}

module.exports = Consulta
