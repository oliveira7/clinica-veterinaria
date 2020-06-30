'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/login', 'UserController.index');
Route.post('/login', 'UserController.login').as('user.login');
Route.get('/logout', 'UserController.logout').as('user.logout');

Route.group(() => {
  Route.on('/').render('frontend.home');
  
  //usuário
  Route.get('usuario', 'UserController.create').as('user.create');
  Route.post('usuario', 'UserController.store').as('user.store');
  
  //funcionário
  Route.get('funcionario', 'UserController.funcionarioIndex').as('user.funcionarioIndex');
  Route.get('funcionario/:id/edit', 'UserController.funcionarioEdit', ({ params }) => {
    return `User ${params.id}`
  }).as('funcionario.edit');

  Route.post('funcionario/:id', 'UserController.funcionarioUpdate', ({ params }) => {
    return `User ${params.id}`
  }).as('funcionario.update');

  //cliente
  Route.get('cliente', 'UserController.clienteIndex').as('user.clienteIndex');
  Route.get('cliente/:id/edit', 'UserController.clienteEdit', ({ params }) => {
    return `User ${params.id}`
  }).as('cliente.edit');

  Route.post('cliente/:id', 'UserController.clienteUpdate', ({ params }) => {
    return `User ${params.id}`
  }).as('cliente.update');

  //animal
  Route.get('cliente/:id/animal', 'AnimalController.index', ({ params }) => {
    return `Cliente ${params.id}`
  }).as('animal.index');

  Route.get('cliente/:id/animal/create', 'AnimalController.create', ({ params }) => {
    return `Cliente ${params.id}`
  }).as('animal.create');

  Route.post('cliente/:id/animal', 'AnimalController.store', ({ params }) => {
    return `Cliente ${params.id}`
  }).as('animal.store');

  Route.get('cliente/:id/animal/:idAnimal/edit', 'AnimalController.edit', ({ params }) => {
    return `Cliente ${params.id}` + `Animal ${params.idAnimal}`
  }).as('animal.edit');

  Route.post('cliente/:id/animal/:idAnimal', 'AnimalController.update', ({ params }) => {
    return `Cliente ${params.id}` + `Animal ${params.idAnimal}`
  }).as('animal.update');

  //sala
  Route.get('sala', 'SalaController.index').as('sala.index');
  Route.get('sala/create', 'SalaController.create').as('sala.create');
  Route.post('sala', 'SalaController.store').as('sala.store');
  Route.get('sala/:id/edit', 'SalaController.edit').as('sala.edit');
  Route.post('sala/:id', 'SalaController.update', ({ params }) => {
    return `Sala ${params.id}`
  }).as('sala.update');

  //medicamento
  Route.get('medicamento', 'MedicamentoController.index').as('medicamento.index');
  Route.get('medicamento/create', 'MedicamentoController.create').as('medicamento.create');
  Route.post('medicamento', 'MedicamentoController.store').as('medicamento.store');
  Route.get('medicamento/:id/edit', 'MedicamentoController.edit').as('medicamento.edit');
  Route.post('medicamento/:id', 'MedicamentoController.update', ({ params }) => {
    return `Medicamento ${params.id}`
  }).as('medicamento.update');

  //consulta
  Route.get('consulta', 'ConsultaController.index').as('consulta.index');
  Route.post('consulta/create', 'ConsultaController.create').as('consulta.create');
  Route.post('consulta', 'ConsultaController.store').as('consulta.store');
  Route.get('consulta/:id/edit', 'ConsultaController.edit').as('consulta.edit');
  Route.post('consulta/:id', 'ConsultaController.update', ({ params }) => {
    return `consulta ${params.id}`
  }).as('consulta.update');

  //prontuario
  Route.get('cliente/:id/animal/:idAnimal/prontuario', 'ProntuarioController.index', ({ params }) => {
    return `Cliente ${params.id}` + `Animal ${params.idAnimal}`
  }).as('prontuario.index'); //tela do animal
  Route.get('consulta/:id/prontuario/create', 'ProntuarioController.create').as('prontuario.create'); // começando a consulta
  Route.post('consulta/:id/prontuario', 'ProntuarioController.store').as('prontuario.store'); // gravando

}).middleware(['authVerif']);

// Route.get('cpf-cliente', 'ConsultaController.cpfCliente');