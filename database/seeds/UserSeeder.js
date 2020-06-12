'use strict'

const Usuario = use("App/Models/User");
const Funcionario = use("App/Models/Funcionario");
const Endereco = use("App/Models/Endereco");

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const usuario = new Usuario();
    usuario.nome_completo = "Administrador";
    usuario.email = "adm@gmail.com";
    usuario.password = "123456";
    usuario.cpf = '0';
    usuario.telefone = '0'
    await usuario.save()

    const endereco = new Endereco();
    endereco.cidade = '-'
    endereco.bairro = '-'
    endereco.rua = '-'
    endereco.numero = '0'
    endereco.usuario_id = usuario.id
    await endereco.save()

    const funcionario = new Funcionario();
    funcionario.usuario_id = usuario.id
    funcionario.cargo = "Adm"
    await funcionario.save()
  }
}

module.exports = UserSeeder
