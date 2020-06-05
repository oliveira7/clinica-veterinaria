'use strict'
const Database = use('Database')

const Animal = use("App/Models/Animal");

class AnimalController {
  async index({ params, response, view }) {
    const animais = await Database
      .from('animals')
      .where('cliente_id', params.id);
      
    return response.send(view.render('frontend.animal.index', { animais: animais, cliente_id: params.id }));
  }

  async create({ params, response, view}) {

    return response.send(view.render('frontend.animal.create', { cliente_id: params.id }));
  }

  async store({ params, request, response, view}) {
    const data = request.all();

    const animal = new Animal()
    animal.nome = data.nome
    animal.especie = data.especie
    animal.raca = data.raca
    animal.cliente_id = params.id
    await animal.save();

    return response.redirect('back');
  }
}

module.exports = AnimalController
