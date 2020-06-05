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

  async store({ params, request, response}) {
    const data = request.all();

    const animal = new Animal()
    animal.nome = data.nome
    animal.especie = data.especie
    animal.raca = data.raca
    animal.cliente_id = params.id
    await animal.save();

    const animais = await Animal.all();
    return response.redirect('/cliente/'+params.id+'/animal', { animais: animais.toJSON() });
  }

  async edit({ params, response, view}) {
    const animal = await Animal.find(parseInt(params.idAnimal));
   
    return response.send(view.render('frontend.animal.edit', { animal: animal, cliente_id: params.id, animal_id: params.idAnimal }));
  }

  async update({ params, request, response}) {
    const data = request.all();

    const animal = await Animal.find(parseInt(params.idAnimal));
    animal.nome = data.nome
    animal.especie = data.especie
    animal.raca = data.raca
    animal.cliente_id = params.id
    await animal.save();

    const animais = await Animal.all();
    return response.redirect('/cliente/'+params.id+'/animal', { animais: animais.toJSON() });
  }
}

module.exports = AnimalController
