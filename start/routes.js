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


Route.on('/').render('frontend.home')

//usuario
Route.group(() => {
  Route.get('/', 'UserController.create').as('users.create');
  Route.post('/', 'UserController.store').as('users.store');
}).prefix('usuario')

Route.get('funcionario', 'UserController.funcionarioIndex').as('users.funcionarioIndex');
Route.get('cliente', 'UserController.clienteIndex').as('users.clienteIndex');

Route.get('cliente/:id/animal', 'AnimalController.index', ({ params }) => {
  return `Cliente ${params.id}`
}).as('animais.index')

Route.get('cliente/:id/animal/create', 'AnimalController.create', ({ params }) => {
  return `Cliente ${params.id}`
}).as('animais.create')

Route.post('cliente/:id/animal', 'AnimalController.store', ({ params }) => {
  return `Cliente ${params.id}`
}).as('animais.store')