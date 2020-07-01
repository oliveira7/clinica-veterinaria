'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FuncionarioLoading {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth }, next) {
    try {
      await auth.user.load('funcionario')
    } catch (error) {}
    await next()
  }
}

module.exports = FuncionarioLoading
