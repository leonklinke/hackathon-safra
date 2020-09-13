'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

///////////////////////////////////////////////////////////
///                        USER                         ///
///////////////////////////////////////////////////////////
Route.post('userLogin', 'UserController.login')
  .middleware('guest')
Route.post('user', 'UserController.create')
  .middleware('guest')
Route.put('user', 'UserController.update')
  .middleware('auth')
Route.delete('user', 'UserController.destroy')
  .middleware('auth')
Route.get('user', 'UserController.show')
  .middleware('auth')

Route.put('user/passwordUpdate', 'UserController.passwordUpdate')
  .middleware('auth')
Route.post('user/forgotPassword', 'UserController.startPasswordRecovery')
Route.put('user/recoverPassword', 'UserController.recoverPassword')

Route.get('userDashboard', 'UserController.dashboard')
  .middleware('auth')

///////////////////////////////////////////////////////////
///                        SESSION                      ///
///////////////////////////////////////////////////////////    
Route.post('/session', 'SessionController.create')
Route.post('/updateSession', 'SessionController.recreate')

///////////////////////////////////////////////////////////
///                        STARTUP                      ///
///////////////////////////////////////////////////////////    
Route.get('/startup/:page/:status?', 'StartupController.get')
  .middleware('auth')
Route.post('/startup', 'StartupController.create')
  .middleware('auth')
Route.get('/startup/:id', 'StartupController.show')
  .middleware('auth')
Route.put('/startup', 'StartupController.update')
  .middleware('auth')

///////////////////////////////////////////////////////////
///                        INVESTMENT                   ///
///////////////////////////////////////////////////////////    
Route.get('/investments/:page/:status?', 'InvestmentController.get')
  .middleware('auth')
Route.post('/investment', 'InvestmentController.create')
  .middleware('auth')
Route.get('/investment/:id', 'InvestmentController.show')
  .middleware('auth')
Route.put('/investment', 'InvestmentController.update')
  .middleware('auth')
Route.delete('/investment/:id', 'InvestmentController.destroy')
  .middleware('auth')

///////////////////////////////////////////////////////////
///                        INTEREST                     ///
///////////////////////////////////////////////////////////    
Route.get('/interest/:page/:user_id/:investment_id?', 'InterestController.get')
  .middleware('auth')
Route.post('/interest', 'InterestController.create')
  .middleware('auth')
Route.get('/interest/:id', 'InterestController.show')
  .middleware('auth')
Route.put('/interest', 'InterestController.update')
  .middleware('auth')
Route.delete('/interest/:id', 'InterestController.destroy')
  .middleware('auth')










