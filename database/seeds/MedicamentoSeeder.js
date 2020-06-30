'use strict'


const Medicamento = use("App/Models/Medicamento");


/*
|--------------------------------------------------------------------------
| MedicamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class MedicamentoSeeder {
  async run () {
    const medicamento = new Medicamento();
    medicamento.laboratorio = "CHEMITEC";
    medicamento.tipo = "Anti-inflamatório";
    medicamento.nome = "Déxium";
    medicamento.local_fisico = "1A2B";
    medicamento.preco_compra = 12.00;
    medicamento.preco_venda = 23.00;
    medicamento.quantidade_estoque = 100;
    await medicamento.save()

    const medicamento1 = new Medicamento();
    medicamento1.laboratorio = "CHEMITEC";
    medicamento1.tipo = "Vermífugo";
    medicamento1.nome = "Chemital";
    medicamento1.local_fisico = "1A3B";
    medicamento1.preco_compra = 15.10;
    medicamento1.preco_venda = 31.30;
    medicamento1.quantidade_estoque = 100;
    await medicamento1.save()

    const medicamento2 = new Medicamento();
    medicamento2.laboratorio = "CHEMITEC";
    medicamento2.tipo = "Higienização";
    medicamento2.nome = "Condicionador Pet® 2 em 1 Aroma Herbal";
    medicamento2.local_fisico = "2A1B";
    medicamento2.preco_compra = 10.20;
    medicamento2.preco_venda = 17.90;
    medicamento2.quantidade_estoque = 100;
    await medicamento2.save()

    const medicamento3 = new Medicamento();
    medicamento3.laboratorio = "CHEMITEC";
    medicamento3.tipo = "Antibiótico";
    medicamento3.nome = "Chemitril";
    medicamento3.local_fisico = "2A2B";
    medicamento3.preco_compra = 56.20;
    medicamento3.preco_venda = 80.90;
    medicamento3.quantidade_estoque = 100;
    await medicamento3.save()
    
    const medicamento4 = new Medicamento();
    medicamento4.laboratorio = "CHEMITEC";
    medicamento4.tipo = "Higiene animal";
    medicamento4.nome = "Desinfetante Pet";
    medicamento4.local_fisico = "2A3B";
    medicamento4.preco_compra = 23.20;
    medicamento4.preco_venda = 56.90;
    medicamento4.quantidade_estoque = 100;
    await medicamento4.save()

    const medicamento5 = new Medicamento();
    medicamento5.laboratorio = "CHEMITEC";
    medicamento5.tipo = "Antiparasitário Externo";
    medicamento5.nome = "Ec-Pet";
    medicamento5.local_fisico = "1A3B";
    medicamento5.preco_compra = 45.20;
    medicamento5.preco_venda = 90.10;
    medicamento5.quantidade_estoque = 100;
    await medicamento5.save()

    const medicamento6 = new Medicamento();
    medicamento6.laboratorio = "CHEMITEC";
    medicamento6.tipo = "Higienização";
    medicamento6.nome = "Oto-top Clean";
    medicamento6.local_fisico = "1A5B";
    medicamento6.preco_compra = 15.20;
    medicamento6.preco_venda = 20.10;
    medicamento6.quantidade_estoque = 100;
    await medicamento6.save()

    const medicamento7 = new Medicamento();
    medicamento7.laboratorio = "CHEMITEC";
    medicamento7.tipo = "Antiparasitário Externo";
    medicamento7.nome = "Ec-Pet";
    medicamento7.local_fisico = "1A3B";
    medicamento7.preco_compra = 45.20;
    medicamento7.preco_venda = 90.10;
    medicamento7.quantidade_estoque = 100;
    await medicamento7.save()
  }
}

module.exports = MedicamentoSeeder
