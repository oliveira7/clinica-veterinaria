'use strict'

const Usuario = use("App/Models/User");
const Funcionario = use("App/Models/Funcionario");
const Endereco = use("App/Models/Endereco");
const Cliente = use("App/Models/Cliente");
const Animal = use("App/Models/Animal");

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

    const usuario1 = new Usuario();
    usuario1.nome_completo = "Verusca Silva";
    usuario1.email = "veruscasilva@gmail.com";
    usuario1.password = "123456";
    usuario1.cpf = '100.100.100-00';
    usuario1.telefone = '(35) 99914-8526'
    await usuario1.save()
    const endereco1 = new Endereco();
    endereco1.cidade = 'Itajubá'
    endereco1.bairro = 'Varginha'
    endereco1.rua = 'Rua Coronel Joaquim Francisco'
    endereco1.numero = '128'
    endereco1.usuario_id = usuario1.id
    await endereco1.save()
    const funcionario1 = new Funcionario();
    funcionario1.usuario_id = usuario1.id
    funcionario1.cargo = "Veterinário(a)"
    await funcionario1.save()

    const usuario2 = new Usuario();
    usuario2.nome_completo = "Thiago Costa";
    usuario2.email = "thiago@yahoo.com";
    usuario2.password = "123456";
    usuario2.cpf = '200.200.200-00';
    usuario2.telefone = '(35) 98333-8526'
    await usuario2.save()
    const endereco2 = new Endereco();
    endereco2.cidade = 'Itajubá'
    endereco2.bairro = 'Centro'
    endereco2.rua = 'Rua Nova'
    endereco2.numero = '235'
    endereco2.usuario_id = usuario2.id
    await endereco2.save()
    const funcionario2 = new Funcionario();
    funcionario2.usuario_id = usuario2.id
    funcionario2.cargo = "Veterinário(a)"
    await funcionario2.save()

    const usuario3 = new Usuario();
    usuario3.nome_completo = "Maiara Olivera";
    usuario3.email = "maiara@yahoo.com";
    usuario3.password = "123456";
    usuario3.cpf = '300.300.300-00';
    usuario3.telefone = '(35) 98452-8526'
    await usuario3.save()
    const endereco3 = new Endereco();
    endereco3.cidade = 'Itajubá'
    endereco3.bairro = 'São Vicente'
    endereco3.rua = 'Rua Antonio Salomon'
    endereco3.numero = '567'
    endereco3.usuario_id = usuario3.id
    await endereco3.save()
    const cliente3 = new Cliente();
    cliente3.usuario_id = usuario3.id
    await cliente3.save()
    const animal3 = new Animal();
    animal3.nome = 'Zeus'
    animal3.raca = 'Husky Siberiano'
    animal3.especie = 'Cachorro'
    animal3.cliente_id = cliente3.id
    await animal3.save()
    const animal4 = new Animal();
    animal4.nome = 'Floquinho'
    animal4.raca = 'Chihuahua'
    animal4.especie = 'Cachorro'
    animal4.cliente_id = cliente3.id
    await animal4.save()

    const usuario4 = new Usuario();
    usuario4.nome_completo = "Cleber Junior";
    usuario4.email = "cleber@gmail.com";
    usuario4.password = "123456";
    usuario4.cpf = '400.400.400-00';
    usuario4.telefone = '(35) 98796-3334'
    await usuario4.save()
    const endereco4 = new Endereco();
    endereco4.cidade = 'Itajubá'
    endereco4.bairro = 'São Vicente'
    endereco4.rua = 'Rua Soledade'
    endereco4.numero = '11'
    endereco4.usuario_id = usuario4.id
    await endereco4.save()
    const cliente4 = new Cliente();
    cliente4.usuario_id = usuario4.id
    await cliente4.save()
    const animal5 = new Animal();
    animal5.nome = 'Abigail'
    animal5.raca = 'Persa'
    animal5.especie = 'Gato'
    animal5.cliente_id = cliente4.id
    await animal5.save()


    const usuario5 = new Usuario();
    usuario5.nome_completo = "Thiago Silva";
    usuario5.email = "thiagosilva@yahoo.com";
    usuario5.password = "123456";
    usuario5.cpf = '700.700.700-00';
    usuario5.telefone = '(35) 91848-8526'
    await usuario5.save()
    const endereco5 = new Endereco();
    endereco5.cidade = 'Itajubá'
    endereco5.bairro = 'Centro'
    endereco5.rua = 'Rua Nova'
    endereco5.numero = '333'
    endereco5.usuario_id = usuario5.id
    await endereco5.save()
    const funcionario5 = new Funcionario();
    funcionario5.usuario_id = usuario5.id
    funcionario5.cargo = "Atendente"
    await funcionario5.save()
  }
}

module.exports = UserSeeder
