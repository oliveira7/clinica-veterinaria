'use strict'
const Database = use('Database')

const Animal = use("App/Models/Animal");
const Prontuario = use("App/Models/Prontuario");
const Consulta = use("App/Models/Consulta");

class ProntuarioController {
  async index({ auth, params, response, view }) {
    const animal = await Animal
    .query()
    .where('id', params.idAnimal)
    .with('prontuario')
    .fetch();

    if((animal.toJSON()[0].prontuario)){
      return response.send(view.render('frontend.prontuario.index', {prontuario: animal.toJSON()[0].prontuario}));
    }
    if(auth.user.getRelated('cliente')){
      return response.redirect(`/cliente/${params.id}/animal/show`);
    }
    return response.redirect(`/cliente/${params.id}/animal`);
  }

  async create({ params, response, view }) {
    const animal = await Animal
    .query()
    .where('id', params.idAnimal)
    .with('prontuario')
    .fetch();

    if((animal.toJSON()[0].prontuario)){
      return response.send(view.render('frontend.prontuario.create', {id: params.id, idAnimal: params.idAnimal, prontuario: animal.toJSON()[0].prontuario}));
    }

    return response.send(view.render('frontend.prontuario.create', {id: params.id, idAnimal: params.idAnimal}));
  }

  async store({ params, request, response }) {
    const data = request.all();
    
    const prontuario = new Prontuario()
    prontuario.sinais_clinicos = data.sinaisClinicos
    prontuario.exames = data.exames
    prontuario.prescricoes = data.prescricoes
    prontuario.dose_vermifogo = data.doseVermifugo
    prontuario.peso = data.peso
    prontuario.ultimo_atendimento = data.ultimoAtendimento
    await prontuario.save();

    const animal = await Animal.find(params.idAnimal);
    animal.prontuario_id = prontuario.id
    await animal.save();

    const consulta = await Consulta.find(params.id);
    consulta.finalizada = true
    consulta.confirmacao = true
    await consulta.save();

    return response.redirect('/consulta');
  }

  async update({ params, request, response }) {
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

module.exports = ProntuarioController
