create database FriendlySnakes;

use FriendlySnakes;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobreNome varchar(45),
email varchar(45),
senha varchar(8)
);

create table Pesquisa1 (
idPesquisa int primary key auto_increment,
resposta varchar(45),
constraint chkResposta1 check (resposta in ('Muito Tranquilo', 'Tranquilo', 'Neutro', 'Medo', 'Muito Medo')),
fkUsuario int,
constraint fkUsuarioPesquisa1 foreign key (fkUsuario) references Usuario (idUsuario)
);

create table Pesquisa2 (
idPesquisa int primary key auto_increment,
resposta varchar(45),
constraint chkResposta2 check (resposta in ('Muito Tranquilo', 'Tranquilo', 'Neutro', 'Medo', 'Muito Medo')),
fkUsuario int,
constraint fkUsuarioPesquisa2 foreign key (fkUsuario) references Usuario (idUsuario)
);

create table Especies (
idEspecies int primary key auto_increment,
-- salvar imagem da coitada salva com url da imagem varchar()
nome varchar(45),
nomeCientifico varchar(45),
familia varchar(45),
descricao varchar(999),
fkUsuario int,
constraint fkUsuarioEspecieFav foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Publicacao (
idPublicacao int auto_increment,
fkUsuario int,
constraint fkUsuarioPublicacao foreign key (fkUsuario) references Usuario (idUsuario),
conteudo varchar(999),
primary key (idPublicacao, fkUsuario)
);

create table Comentario (
idComentario int auto_increment,
fkUsuario int,
constraint fkUsuarioComentario foreign key (fkUsuario) references Usuario (idUsuario),
fkPublicacao int,
constraint fkPublicacaoComentario foreign key (fkPublicacao) references Usuario (idUsuario),
comentario varchar(250),
primary key (idComentario, fkUsuario, fkPublicacao)
);

describe Usuario;
describe Pesquisa1;
describe Pesquisa2;
describe Especies;
describe Publicacao;
describe Comentario;

select * from Usuario;
select * from Especies;
select * from Pesquisa1;
select * from Pesquisa2;
select * from Publicacao;
select * from Comentario;

select resposta, count(*) as 'total' from Pesquisa1 group by resposta; -- where pesquisa = 'Neutro';
SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Muito Medo' GROUP BY resposta;
SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Medo' GROUP BY resposta;
SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Neutro' GROUP BY resposta;
SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Tranquilo' GROUP BY resposta;
SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Muito Tranquilo' GROUP BY resposta;


insert into Pesquisa1 values
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Muito Tranquilo', null),
(null, 'Muito Medo', null),
(null, 'Medo', null);
