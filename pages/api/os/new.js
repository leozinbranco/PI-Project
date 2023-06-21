// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const knex = require("../../../db/db");
export default async function handler(req, res) {
  // const nomeCliente = "[NOME DO CLIENTE]";
  // console.log("###########################", req);
  console.log("NNTESSS---BODY###");

  if (req.method === "POST") {
    const bodyParams = JSON.parse(req.body);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>BODY###", bodyParams);

    const {
      nome_cliente,
      equipamento,
      desc_servico_OS,
      num_serie_equip,
      tipo_equip,
    } = bodyParams;

    try {
      // Verificar o id da Pessoa pelo Nome
      const pessoa = await knex("Pessoa")
        .where("nome_pessoa", nome_cliente)
        .first();
      if (!pessoa) {
        console.log("Pessoa não encontrada");
        return res.status(500).json({ error: "Pesssoa não encontrada" });
      }

      // Inserir dados na tabela Equipamento
      console.log(">>", pessoa);
      var equipamentoId;
      await knex("Equipamentos")
        .insert({
          id_pessoa: pessoa.id_pessoa,
          num_serie_equip: num_serie_equip,
          desc_equip: equipamento,
          avaria_equip: desc_servico_OS,
          tipo_equip: tipo_equip,
        })
        .then(async () => {
          await knex("Ordem_Servico").insert({
            id_pessoa: pessoa.id_pessoa,
            num_serie_equip: num_serie_equip,
            date_inicio_OS: new Date(),
            desc_servico_OS: desc_servico_OS,
            stts_andamento_OS: "ORÇAMENTO",
            matricula_func: 1011,
          });
        });

      res.status(200).json("Operações concluídas com sucesso");
    } catch (error) {
      console.log(error);
      res.status(500).json(JSON.stringify(error));
    } finally {
      knex.destroy();
    }
  }
}
