process.env.AMBIENTE_PROCESSO = "desenvolvimento"
require('dotenv').config();

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "Public")));

const corsOptions = {
    origin: 'http://localhost:YOUR_FRONTEND_PORT', // Substitua pela origem real do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var graficoRouter = require("./src/routes/grafico");
var publiRouter = require("./src/routes/publi");

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/grafico", graficoRouter);
app.use("/publi", publiRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});