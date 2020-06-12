'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthVerif {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({  response, auth }, next) {
    try {
      await auth.check();
    } catch (error) {
      return response.redirect('/login');
    }
    await next();
  }
}

module.exports = AuthVerif;
