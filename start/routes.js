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

Route.get('funcionario', 'UserController.funcionarioIndex').as('users.funcionarioIndex');
Route.get('cliente', 'UserController.clienteIndex').as('users.clienteIndex');
Route.get('usuario', 'UserController.create').as('users.create');
Route.post('usuario', 'UserController.store').as('users.store');


// Route.get('login', 'UserController.index')
// Route.post('login', 'UserController.login')
// Route.get('users/:id', 'UserController.show').middleware('auth')