// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const knex = require("../../../db/db");
export default async function handler(req, res) {
  // const nomeCliente = "[NOME DO CLIENTE]";
  const { idPessoa } = req.query;
  console.log("CHGOU", req.query);
  // await knex
  //   .select("*")
  //   .from("Ordem_Servico")
  await knex
    .select(
      "os.num_OS",
      "p.nome_pessoa",
      "ep.tipo_equip",
      "ep.desc_equip",
      "os.stts_andamento_OS",
      "os.date_inicio_OS",
      "os.date_fim_OS",
      "os.data_ult_update_OS",
      "f.ramal_func",
      "f.email_func"
    )
    .from("Ordem_Servico AS os")
    .innerJoin("Pessoa AS p", "p.id_pessoa", "os.id_pessoa")
    .innerJoin("Equipamentos AS ep", "ep.num_serie_equip", "os.num_serie_equip")
    .innerJoin("Funcionario AS f", "f.matricula_func", "os.matricula_func")
    // .where("os.id_pessoa", parseInt(idPessoa))
    .then((results) => {
      console.log("resultados>>", results);
      res.status(200).json(results);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
