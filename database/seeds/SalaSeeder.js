'use strict'

const Sala = use("App/Models/Sala");


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class SalaSeeder {
  async run () {
    const sala = new Sala();
    sala.numero = "11";
    sala.descricao = "Sala para exames radiográficos";
    await sala.save()

    const sala1 = new Sala();
    sala1.numero = "12";
    sala1.descricao = "Sala odontológica";
    await sala1.save()

    const sala2 = new Sala();
    sala2.numero = "13";
    sala2.descricao = "Sala de fisioterapia e dermatologia";
    await sala2.save()

    const sala3 = new Sala();
    sala3.numero = "14";
    sala3.descricao = "Sala de tomografia";
    await sala3.save()
  }
}

module.exports = SalaSeeder
