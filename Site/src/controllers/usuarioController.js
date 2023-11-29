var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            sobrenome: resultadoAutenticar[0].sobreNome,
                            senha: resultadoAutenticar[0].senha
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("Dados recebidos:", nome, sobrenome, email, senha);

    if (nome == undefined) {
        console.log("Erro: Seu nome está undefined!");
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        console.log("Erro: Seu sobrenome está undefined!");
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        console.log("Erro: Seu email está undefined!");
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        console.log("Erro: Sua senha está undefined!");
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, sobrenome, email, senha)
            .then(
                function (resultado) {
                    console.log("Cadastro realizado com sucesso!");
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("Erro no cadastro:", erro);
                    res.status(500).json(erro.sqlMessage || "Erro interno no servidor");
                }
            );
    }
}

function responder(req, res) {
    var resposta_p1 = req.body.resposta_p1Server;
    var idUsuario = req.body.idUsuarioServer;

    console.log("Dados recebidos:", resposta_p1, idUsuario);

    if (resposta_p1 == undefined) {
        console.log("Erro: Pesquisa está undefined!");
        res.status(400).send("Pesquisa undefined!");
    } else {
        usuarioModel.responder(resposta_p1, idUsuario)
            .then(
                function (resultado) {
                    console.log("Pesquisa respondida com sucesso!");
                    res.json(resultado);
                    // responderIdPesquisa(res);
                }
            ).catch(
                function (erro) {
                    console.log("Erro na pesquisa:", erro);
                    res.status(500).json(erro.sqlMessage || "Erro interno no servidor");
                }
            );
    }
}

// p1Respondida

// function responderIdPesquisa(res) {

//     if (idPesquisa == undefined) {
//         // res.status(400).send("Seu email está undefined!");
//     } else {
//         alert("macos me mordão")
//         usuarioModel.responderIdPesquisa()
//             .then(
//                 function (resultadoIdPesquisa) {
//                     console.log(`\nResultados encontrados: ${resultadoIdPesquisa.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoIdPesquisa)}`); // transforma JSON em String

//                     if (resultadoIdPesquisa.length == 1) {
//                         console.log(resultadoIdPesquisa);
//                         console.log("daniel gay <3" + resultadoIdPesquisa);
//                         res.json({
//                             idPesquisa: resultadoIdPesquisa[0].idPesquisa,
//                         });
//                     } else if (resultadoIdPesquisa.length == 0) {
//                         // res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         // res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     // res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

// function updateUsuario(req, res) {
//     var idUsuario = req.body.idUsuarioServer;
//     var idPesquisa = req.body.idPesquisaServer;

//     console.log("Dados recebidos:", idUsuario, idPesquisa);

//         usuarioModel.updateUsuario(idUsuario, idPesquisa)
//             .then(
//                 function (resultado) {
//                     console.log("Pesquisa respondida com sucesso!");
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log("Erro na pesquisa:", erro);
//                     res.status(500).json(erro.sqlMessage || "Erro interno no servidor");
//                 }
//             );
//     }

module.exports = {
    autenticar,
    cadastrar,
    responder
    // p1Respondida
    // responderIdPesquisa,
    // updateUsuario
}