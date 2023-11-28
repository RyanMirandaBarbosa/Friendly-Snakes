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
                            id: resultadoAutenticar[0].idUsuario,
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

module.exports = {
    autenticar,
    cadastrar
}