'use strict'
const Database = use('Database')

const Avaliacao = use("App/Models/Avaliacao");

class AvaliacaoController {
  async index({ params, response, view }) {
    const avaliacoes = await Database.from('avaliacaos').where('cliente_id', params.id);

    return response.send(view.render('frontend.avaliacao.index', {id: params.id , avaliacoes: avaliacoes}));
  }

  async create({ params, response, view }) {

    return response.send(view.render('frontend.avaliacao.create', {id: params.id}));
  }

  async store({ params, request, response }) {
    const data = request.all();

    const avaliacao = new Avaliacao()
    avaliacao.av_experiencia = data.experiencia
    avaliacao.av_veterinario = data.veterinario
    avaliacao.av_instalacao = data.instalacao
    avaliacao.av_atendimento = data.atendimento
    avaliacao.feedback = data.feedback
    avaliacao.cliente_id = params.id
    await avaliacao.save();

    return response.redirect(`/cliente/${params.id}/avaliacao`);
  }
}

module.exports = AvaliacaoController
