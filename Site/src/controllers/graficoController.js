var graficoModel = require("../models/graficoModel");

function infGraficos(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    graficoModel.infGraficos(email, senha)
        .then(function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if (resultado.length > 0) {
                console.log("buralaburala" + resultado[0].P1_muitoTranquilo)
                res.json({
                    P1_muitoTranquilo: resultado[0].P1_muitoTranquilo,
                    P1_tranquilo: resultado[0].P1_tranquilo,
                    P1_neutro: resultado[0].P1_neutro,
                    P1_medo: resultado[0].P1_medo,
                    P1_muitoMedo: resultado[0].P1_muitoMedo,
                    P2_muitoTranquilo: resultado[0].P2_muitoTranquilo,
                    P2_tranquilo: resultado[0].P2_tranquilo,
                    P2_neutro: resultado[0].P2_neutro,
                    P2_medo: resultado[0].P2_medo,
                    P2_muitoMedo: resultado[0].P2_muitoMedo
                });
            } else {
                res.status(403).send("Nenhum resultado encontrado.");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ error: "Erro interno no servidor" });
        });
}

module.exports = {
    infGraficos
};
