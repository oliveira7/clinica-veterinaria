'use strict'
const Database = use('Database');

const Sala = use("App/Models/Sala");

class SalaController {
  async index({ response, view }) {
    const salas = await Sala.all();

    return response.send(view.render('frontend.sala.index', { salas: salas.toJSON() }));
  }

  async create({ response, view }) {

    return response.send(view.render('frontend.sala.create'));
  }

  async store({ request, response, view }) {
    const data = request.all();

    const sala = new Sala()
    sala.numero = data.numero;
    sala.descricao = data.descricao;
    sala.disponibilidade = true;
    await sala.save();

    const salas = await Sala.all();
    return response.redirect('/sala', { salas: salas.toJSON() });
  }

  async edit({ params, response, view }) {
    const sala = await Sala.find(parseInt(params.id));
   
    return response.send(view.render('frontend.sala.edit', { sala: sala, id: params.id }));
  }

  async update({ params, request, response }) {
    const data = request.all();

    const sala = await Sala.find(parseInt(params.id));
    sala.numero = data.numero
    sala.descricao = data.descricao
    await sala.save();

    const salas = await Sala.all();
    return response.redirect('/sala', { salas: salas.toJSON() });
  }

  async destroy({ params, request, response }) {
    const { id } = params
    const sala = await Sala.find(id)
    await user.delete()

    const salas = await Sala.all();
    return response.redirect('/sala', { salas: salas.toJSON() });
  }
}

module.exports = SalaController
