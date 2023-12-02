var database = require("../database/config");

function infGraficos(email, senha) {
    const instrucao = `
        SELECT 
            (SELECT COUNT(*) FROM Pesquisa1 WHERE resposta = 'Muito Tranquilo') AS P1_muitoTranquilo,
            (SELECT COUNT(*) FROM Pesquisa1 WHERE resposta = 'Tranquilo') AS P1_tranquilo,
            (SELECT COUNT(*) FROM Pesquisa1 WHERE resposta = 'Neutro') AS P1_neutro,
            (SELECT COUNT(*) FROM Pesquisa1 WHERE resposta = 'Medo') AS P1_medo,
            (SELECT COUNT(*) FROM Pesquisa1 WHERE resposta = 'Muito Medo') AS P1_muitoMedo,
            (SELECT COUNT(*) FROM Pesquisa2 WHERE resposta = 'Muito Tranquilo') AS P2_muitoTranquilo,
            (SELECT COUNT(*) FROM Pesquisa2 WHERE resposta = 'Tranquilo') AS P2_tranquilo,
            (SELECT COUNT(*) FROM Pesquisa2 WHERE resposta = 'Neutro') AS P2_neutro,
            (SELECT COUNT(*) FROM Pesquisa2 WHERE resposta = 'Medo') AS P2_medo,
            (SELECT COUNT(*) FROM Pesquisa2 WHERE resposta = 'Muito Medo') AS P2_muitoMedo;
    `;

    console.log("Executando a instrução SQL:\n", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    infGraficos
};
