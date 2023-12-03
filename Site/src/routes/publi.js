const express = require("express");
const router = express.Router();
const publiController = require("../controllers/publiController");

router.post("/publicar/:idUsuario", function (req, res) {
    publiController.publicar(req, res);
});

router.get("/listar", function (req, res) {
    publiController.listar(req, res);
});

module.exports = router;