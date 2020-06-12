'use strict'
const Database = use('Database');

const Usuario = use("App/Models/User");
const Funcionario = use("App/Models/Funcionario");
const Animal = use("App/Models/Animal");

class ConsultaController {
  async index({ params, response, view }) {
    const animais = await Database
      .from('animals')
      .where('cliente_id', params.id);
      
    return response.send(view.render('frontend.animal.index', { animais: animais, cliente_id: params.id }));
  }

  async create({ response, view, request}) {
    const data = request.all();
    const cliente = await Database.from('users').where('cpf', data.cpfValue);
    // const veterinarios = await Database.from('funcionarios').where('cargo', 'Veterinário').with('usuario');
    const veterinarios = await Funcionario
      .query()
      .with('usuario')
      .where('cargo', 'Veterinário')
      .fetch();
    
    const animais = await Database.from('animals').where('cliente_id', cliente[0].id);
 
    return response.send(view.render('frontend.consulta.create', { cliente: cliente, veterinarios: veterinarios.toJSON(), animais: animais }));
  }

  // async cpfCliente({ params, response, view, request}) {
  //   const data = request.all();
  //   const cliente = await Database.from('users').where('cpf', data.cpf);
    
  //   return { cliente : cliente };
  // }
}


module.exports = ConsultaController
