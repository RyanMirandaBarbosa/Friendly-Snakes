const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
// const pesquisaController = require("../controllers/pesquisaController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/responder", function (req, res) {
    usuarioController.responder(req, res);
}); 

// router.post("/responderIdPesquisa", function (req, res) {
//     usuarioController.responderIdPesquisa(req, res);
// }); 

// router.post("/updateUsuario", function (req, res) {
//     usuarioController.updateUsuario(req, res);
// }); 
module.exports = router;