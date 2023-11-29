var pesquisaModel = require("../models/pesquisaModel");

function responder(req, res) {
    var resposta_p1 = req.body.resposta_p1Server;

    console.log("Dados recebidos:", resposta_p1);

    if (resposta_p1 == undefined) {
        console.log("Erro: Pesquisa está undefined!");
        res.status(400).send("Pesquisa undefined!");
    } else {
        pesquisaModel.responder(resposta_p1)
            .then(
                function (resultado) {
                    console.log("Pesquisa respondida com sucesso!");
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("Erro na pesquisa:", erro);
                    res.status(500).json(erro.sqlMessage || "Erro interno no servidor");
                }
            );
    }
}

module.exports = {
    // autenticar,
    responder
}