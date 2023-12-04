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

create table Publicacao (
idPublicacao int auto_increment,
fkUsuario int,
constraint fkUsuarioPublicacao foreign key (fkUsuario) references Usuario (idUsuario),
conteudo varchar(999),
primary key (idPublicacao, fkUsuario)
);

describe Usuario;
describe Pesquisa1;
describe Pesquisa2;
describe Publicacao;

select * from Usuario;
select * from Pesquisa1;
select * from Pesquisa2;
select * from Publicacao;

-- select resposta, count(*) as 'total' from Pesquisa2 group by resposta; 
-- SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Muito Medo' GROUP BY resposta;
-- SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Medo' GROUP BY resposta;
-- SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Neutro' GROUP BY resposta;
-- SELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Tranquilo' GROUP BY resposta;
-- ELECT resposta, COUNT(*) AS 'total' FROM Pesquisa1 WHERE resposta = 'Muito Tranquilo' GROUP BY resposta;

insert into Pesquisa1 values
(null, 'Muito Tranquilo', null),
(null, 'Muito Tranquilo', null),

(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),

(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),

(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),

(null, 'Muito Medo', null),
(null, 'Muito Medo', null),
(null, 'Muito Medo', null),
(null, 'Muito Medo', null);

insert into Pesquisa2 values
(null, 'Muito Tranquilo', null),
(null, 'Muito Tranquilo', null),
(null, 'Muito Tranquilo', null),
(null, 'Muito Tranquilo', null),
(null, 'Muito Tranquilo', null),

(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),
(null, 'Tranquilo', null),

(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),
(null, 'Neutro', null),

(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),
(null, 'Medo', null),

(null, 'Muito Medo', null);