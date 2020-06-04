'use strict'

const Cliente = use("App/Models/Cliente");
const Funcionario = use("App/Models/Cliente");
const Endereco = use("App/Models/Endereco");
const Usuario = use("App/Models/User");

class UserController {
  async funcionarioIndex({ request, response, view }) {
    const funcionarios = await Funcionario.all();
    
    return response.send(view.render('frontend.usuario.funcionario-index', { funcionarios: funcionarios.toJSON() }));
  }

  async clienteIndex({ request, response, view }) {
    const clientes = await Cliente.all();
    
    return response.send(view.render('frontend.usuario.cliente-index', { clientes: clientes.toJSON() }));
  }

  async create({ request, response, view }) {
    return response.send(view.render('frontend.usuario.create'));
  }

  async store({ request, response, view }) {
    const data = request.all();

    const endereco = new Endereco()
    endereco.cidade = data.cidade
    endereco.bairro = data.bairro
    endereco.rua = data.rua
    endereco.numero = data.numero
    await endereco.save()

    if(data.cliente){
      const cliente = new Cliente()
      await cliente.save()

      const usuario = new Usuario()
      usuario.username = 'teste'
      usuario.nome_completo = data.nomeCompleto
      usuario.email = data.email
      usuario.password = data.senha
      usuario.cpf = data.CPF
      usuario.telefone = data.telefone
      usuario.cliente_id = cliente.id
      usuario.endereco_id = endereco.id
      await cliente.save()
    }else{
      const funcionario = new Funcionario()
      funcionario.cargo = data.cargo
      await funcionario.save()

      const usuario = new Usuario()
      usuario.username = 'teste'
      usuario.nome_completo = data.nomeCompleto
      usuario.email = data.email
      usuario.password = data.senha
      usuario.cpf = data.CPF
      usuario.telefone = data.telefone
      usuario.funcionario_id = funcionario.id
      usuario.endereco_id = endereco.id
      await usuario.save()
    }

    return response.redirect('back')
  }

  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}

  async login ({ request, auth }) {
    console.log(request.all());
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }
}

module.exports = UserController
