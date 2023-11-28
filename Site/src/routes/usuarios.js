const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;
// var express = require("express");
// var router = express.Router();

// var usuarioController = require("../controllers/usuarioController");

// //Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     usuarioController.cadastrar(req, res);
// })

// router.post("/autenticar", function (req, res) {
//     usuarioController.autenticar(req, res);
// });

// module.exports = router;