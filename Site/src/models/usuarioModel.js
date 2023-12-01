var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        select * from Usuario where email = '${email}' and senha = '${senha}';
    `;

    // SELECT idUsuario, nome, email as usuarioId FROM usuario WHERE email = '${email}' AND senha = '${senha}';

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome, sobreNome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function responder(resposta_p1, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function responder():", resposta_p1, idUsuario);
    // console.log(idUsuario)
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Pesquisa1 (resposta, fkUsuario) VALUES ('${resposta_p1}', ${idUsuario});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function p1Respondida(fkUsuario) {
    var instrucao = `
        SELECT * FROM Pesquisa1 WHERE fkUsuario = '${fkUsuario}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// INSERT INTO Usuario (fkPesquisa1) VALUES ('${idPesquisa}') WHERE idUsuario = ${idUsuario};
// select idPesquisa from Pesquisa1 order by idPesquisa desc limit 1;
// UPDATE Usuario SET fkPesquisa1 = ${idPesquisa} WHERE idUsuario = ${idUsuario};

// function responderIdPesquisa() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
//     var instrucao = `
//         select idPesquisa from Pesquisa1 order by idPesquisa desc limit 1;
//     `;

//     // SELECT idUsuario, nome, email as usuarioId FROM usuario WHERE email = '${email}' AND senha = '${senha}';

//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function updateUsuario(idUsuario, idPesquisa) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
//     var instrucao = `
//     UPDATE Usuario SET fkPesquisa1 = ${idPesquisa} WHERE idUsuario = ${idUsuario};
//     `;

//     // SELECT idUsuario, nome, email as usuarioId FROM usuario WHERE email = '${email}' AND senha = '${senha}';

//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    autenticar,
    cadastrar,
    responder,
    p1Respondida
};