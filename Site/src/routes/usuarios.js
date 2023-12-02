const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/responder", function (req, res) {
    usuarioController.responder(req, res);
});

router.post("/responder_p2", function (req, res) {
    usuarioController.responder_p2(req, res);
});

router.post("/p1Respondida", function (req, res) {
    usuarioController.p1Respondida(req, res);
});

router.post("/p2Respondida", function (req, res) {
    usuarioController.p2Respondida(req, res);
});

module.exports = router;