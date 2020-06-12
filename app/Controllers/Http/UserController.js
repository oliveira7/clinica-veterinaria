'use strict'
const Database = use('Database');

const Cliente = use("App/Models/Cliente");
const Funcionario = use("App/Models/Funcionario");
const Endereco = use("App/Models/Endereco");
const Usuario = use("App/Models/User");

class UserController {
  async funcionarioIndex({ response, view }) {
    const funcionarios = await Funcionario
      .query()
      .with('usuario.endereco')
      .where('cargo','!=','Adm')
      .fetch()

    return response.send(view.render('frontend.usuario.funcionario-index', { funcionarios: funcionarios.toJSON() }));
  }

  async clienteIndex({ response, view }) {
    const clientes = await Cliente
      .query()
      .with('usuario.endereco')
      .fetch()

    return response.send(view.render('frontend.usuario.cliente-index', { clientes: clientes.toJSON() }));
  }

  async create({ response, view }) {
    
    return response.send(view.render('frontend.usuario.create'));
  }

  async store({ request, response }) {
    const data = request.all();

    const usuario = new Usuario()
    usuario.nome_completo = data.nomeCompleto
    usuario.email = data.email
    usuario.password = data.senha
    usuario.cpf = data.cpf
    usuario.telefone = data.telefone
    await usuario.save()

    const endereco = new Endereco()
    endereco.cidade = data.cidade
    endereco.bairro = data.bairro
    endereco.rua = data.rua
    endereco.numero = data.numero
    endereco.usuario_id = usuario.id
    await endereco.save()

    if(data.tipo == 'cliente'){
      const cliente = new Cliente()
      cliente.usuario_id = usuario.id
      await cliente.save()

      const clientes = await Cliente.all();
      return response.redirect('/cliente', { clientes: clientes.toJSON() });
    }else{
      const funcionario = new Funcionario()
      funcionario.usuario_id = usuario.id
      funcionario.cargo = data.cargo
      await funcionario.save()

      const funcionarios = await Funcionario.all();
      return response.redirect('/funcionario', { funcionarios: funcionarios.toJSON() });
    }
  }

  async edit({ params, request, response }) {
    const animal = await Animal.find(parseInt(params.idAnimal));
   
    return response.send(view.render('frontend.animal.edit', { animal: animal, cliente_id: params.id, animal_id: params.idAnimal }));
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

  async funcionarioEdit({ params, response, view }) {
    const funcionario = await Funcionario
      .query()
      .where('id', parseInt(params.id))
      .with('usuario.endereco')
      .first();
     
    return response.send(view.render('frontend.usuario.funcionario-edit', { funcionario: funcionario.toJSON(), idFuncionario: params.id }));
  }

  async funcionarioUpdate({ params, request, response }) {
    const data = request.all();

    const funcionario = await Funcionario
    .query()
    .where('id', parseInt(params.id))
    .with('usuario.endereco')
    .first();

    funcionario.cargo = data.cargo
    await funcionario.save()

    const json = { funcionario: funcionario.toJSON() };
  
    const usuario = await Usuario.find(json.funcionario.usuario.id);
    usuario.nome_completo = data.nomeCompleto
    usuario.email = data.email
    usuario.password = data.senha
    usuario.cpf = data.cpf
    usuario.telefone = data.telefone
    await usuario.save()

    const endereco = await Endereco.find(json.funcionario.usuario.endereco.id);
    endereco.cidade = data.cidade
    endereco.bairro = data.bairro
    endereco.rua = data.rua
    endereco.numero = data.numero
    await endereco.save()

    const funcionarios = await Funcionario.all();
    return response.redirect('/funcionario', { funcionarios: funcionarios.toJSON() });
  }
 
  async clienteEdit({ params, response, view }) {
    const cliente = await Cliente
      .query()
      .where('id', parseInt(params.id))
      .with('usuario.endereco')
      .first();
     
    return response.send(view.render('frontend.usuario.cliente-edit', { cliente: cliente.toJSON(), idCliente: params.id }));
  }

  async clienteUpdate({ params, request, response }) {
    const data = request.all();

    const cliente = await Cliente
    .query()
    .where('id', parseInt(params.id))
    .with('usuario.endereco')
    .first();

    const json = { cliente: cliente.toJSON() };
  
    const usuario = await Usuario.find(json.cliente.usuario.id);
    usuario.nome_completo = data.nomeCompleto
    usuario.email = data.email
    usuario.password = data.senha
    usuario.cpf = data.cpf
    usuario.telefone = data.telefone
    await usuario.save()

    const endereco = await Endereco.find(json.cliente.usuario.endereco.id);
    endereco.cidade = data.cidade
    endereco.bairro = data.bairro
    endereco.rua = data.rua
    endereco.numero = data.numero
    await endereco.save()

    const clientes = await Cliente.all();
    return response.redirect('/cliente', { clientes: clientes.toJSON() });
  }

  async index({ response, view }) {

    return response.send(view.render('auth.login'));
  }

  async login ({ response, request, auth }) {
    const { email, password } = request.all();
    await auth.attempt(email, password);

    return response.redirect('/');
  }

  async logout ({ response,auth }) {
    await auth.logout();

    return response.redirect('/login');
  }
}

module.exports = UserController
