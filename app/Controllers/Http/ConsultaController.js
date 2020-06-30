'use strict'
const Database = use('Database');

const Usuario = use("App/Models/User");
const Funcionario = use("App/Models/Funcionario");
const Animal = use("App/Models/Animal");
const Consulta = use("App/Models/Consulta");
const Sala = use("App/Models/Sala");

class ConsultaController {
  async index({ response, view }) {
    const consultas = await Consulta
    .query()
    .with('animal.cliente.usuario')
    .with('sala')
    .with('funcionario.usuario')
    .fetch();
   console.log(consultas);

    return response.send(view.render('frontend.consulta.index', { consultas: consultas.toJSON() }));
  }

  async create({ response, view, request }) {
    const data = request.all();
    const usuario = await Usuario
      .query()
      .with('cliente')
      .where('cpf', data.cpfValue)
      .first();
  
    const veterinarios = await Funcionario
      .query()
      .with('usuario')
      .where('cargo', 'Veterinário(a)')
      .fetch();

    const salas = await Database.from('salas');
 
    const animais = await Database.from('animals').where('cliente_id', usuario.toJSON().cliente.id);
    
    return response.send(view.render('frontend.consulta.create', { salas: salas, cliente: usuario.toJSON(), veterinarios: veterinarios.toJSON(), animais: animais }));
  }

  async store({ request, response }) {
    const data = request.all();
    const dates = (data.date).split(" ");

    const consulta = new Consulta()
    consulta.horario = dates[1]
    consulta.data = dates[0]
    consulta.confirmacao = false
    consulta.finalizada = false
    consulta.sala_id = data.salaId
    consulta.animal_id = data.animalId
    consulta.veterinario_id = data.veterinarioId
    await consulta.save();

    return response.redirect('/consulta');
  }

  async edit({ params, response, view }) {
    const consulta = await Consulta
      .query()
      .with('animal.cliente.usuario')
      .with('sala')
      .with('funcionario.usuario')
      .where('id', parseInt(params.id))
      .fetch();
      
    const veterinarios = await Funcionario
      .query()
      .with('usuario')
      .where('cargo', 'Veterinário(a)')
      .fetch();

    const salas = await Database.from('salas');

    const animais = await Database.from('animals').where('cliente_id', (consulta.toJSON())[0].animal.cliente.id);

    return response.send(view.render('frontend.consulta.edit', { animais: animais, veterinarios: veterinarios.toJSON(), salas: salas, consulta: (consulta.toJSON())[0], id: params.id }));
  }

  async update({ params, request, response }) {
    const data = request.all();
    const dates = (data.date).split(" ");

    const consulta = await Consulta.find(parseInt(params.id));
    consulta.horario = dates[1]
    consulta.data = dates[0]
    consulta.sala_id = data.salaId
    consulta.animal_id = data.animalId
    consulta.animal_id = data.animalId
    consulta.veterinario_id = data.veterinarioId
    await consulta.save();

    return response.redirect('/consulta');
  }

  async destroy({ params, request, response }) {
    const { id } = params
    const sala = await Sala.find(id)
    await user.delete()

    const salas = await Sala.all();
    return response.redirect('/sala', { salas: salas.toJSON() });
  }
}

module.exports = ConsultaController
