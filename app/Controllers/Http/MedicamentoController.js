'use strict'
const Database = use('Database');

const Medicamento = use("App/Models/Medicamento");

class MedicamentoController {
  async index({ response, view }) {
    const medicamentos = await Medicamento.all();

    return response.send(view.render('frontend.medicamento.index', { medicamentos: medicamentos.toJSON() }));
  }

  async create({ response, view }) {

    return response.send(view.render('frontend.medicamento.create'));
  }

  async store({ request, response}) {
    const data = request.all();

    const medicamento = new Medicamento()
    medicamento.preco_venda = data.precoVenda;
    medicamento.composicao = data.composicao;
    medicamento.laboratorio = data.laboratorio;
    medicamento.tipo = data.tipo;
    medicamento.nome = data.nome;
    medicamento.preco_compra = data.precoCompra;
    medicamento.local_fisico = data.localFisico;
    medicamento.quantidade_estoque = data.quantidadeEstoque;
    await medicamento.save();

    const medicamentos = await Medicamento.all();
    return response.redirect('/medicamento', { medicamentos: medicamentos.toJSON() });
  }

  async edit({ params, response, view }) {
    const medicamento = await Medicamento.find(params.id);

    return response.send(view.render('frontend.medicamento.edit', {medicamento: medicamento}));
  }

  async update({ params, request, response}) {
    const data = request.all();

    const medicamento = await Medicamento.find(params.id);
    medicamento.preco_venda = data.precoVenda;
    medicamento.composicao = data.composicao;
    medicamento.laboratorio = data.laboratorio;
    medicamento.tipo = data.tipo;
    medicamento.nome = data.nome;
    medicamento.preco_compra = data.precoCompra;
    medicamento.local_fisico = data.localFisico;
    medicamento.quantidade_estoque = data.quantidadeEstoque;
    await medicamento.save();

    const medicamentos = await Medicamento.all();
    return response.redirect('/medicamento', { medicamentos: medicamentos.toJSON() });
  }

}

module.exports = MedicamentoController
