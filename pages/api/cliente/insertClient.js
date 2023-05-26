// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const knex = require("../../../db/db");
export default async function handler(req, res) {
  // const nomeCliente = "[NOME DO CLIENTE]";
  if (req.method === "POST") {
    const bodyParams = JSON.parse(req.body);
    const {
      nome_pessoa,
      telefone_pessoa,
      email_pessoa,
      endereco_pessoa,
      flag_contrato_cliente,
      sexo,
      cpfCnpj,
      nome_fantasia_jurid,
      inscricao_estad_jurid,
    } = bodyParams;
    const dadosPessoa = {
      nome_pessoa,
      telefone_pessoa,
      email_pessoa,
      endereco_pessoa,
    };
    var idPessoa;

    console.log(req);
    await knex("Pessoa")
      .insert(dadosPessoa)
      .then((ids) => {
        console.log("TESTE CHEGOU");
        idPessoa = ids[0];
        console.log(">>", ids);

        // Inserção na tabela "Clientes"
        const dadosClientes = {
          id_pessoa: idPessoa,
          flag_contrato_cliente: flag_contrato_cliente,
        };

        return knex("Clientes").insert(dadosClientes);
      })
      .then(() => {
        console.log(">>", flag_contrato_cliente);
        if (flag_contrato_cliente === 0) {
          // Inserção na tabela "Fisica"
          const dadosFisica = {
            id_pessoa: idPessoa, // Certifique-se de ter obtido o valor de idPessoa na inserção anterior
            cpf_fisica: cpfCnpj,
            Sexo: sexo,
          };
          console.log(">>>>>>", dadosFisica);

          return knex("Fisica").insert(dadosFisica);
        } else {
          // Inserção na tabela "Juridica"
          const dadosJurifica = {
            id_pessoa: idPessoa, // Certifique-se de ter obtido o valor de idPessoa na inserção anterior
            cnpj_juridica: cpfCnpj,
            nome_fantasia_jurid,
            inscricao_estad_jurid,
          };
          console.log(">>>>>>", dadosJurifica);
          return knex("Juridica").insert(dadosJurifica);
        }
      })
      .then(() => {
        console.log("Inserções concluídas com sucesso!");
        knex.destroy();
      })
      .catch((error) => {
        console.error("Erro ao realizar as inserções:", error);
        knex.destroy();
      });
  }
}
