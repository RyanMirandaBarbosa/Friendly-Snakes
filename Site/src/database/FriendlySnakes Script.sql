create database FriendlySnakes;

use FriendlySnakes;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobreNome varchar(45),
email varchar(45),
senha varchar(8),
fkPesquisa1 int,
fkPesquisa2 int,
fkEspecieFavorita int
);

create table Pesquisa1 (
idPesquisa int primary key auto_increment,
resposta varchar(45),
constraint chkResposta1 check (resposta in ('Muito Tranquilo', 'Tranquilo', 'Neutro', 'Medo', 'Muito Medo'))
);

create table Pesquisa2 (
idPesquisa int primary key auto_increment,
resposta varchar(45),
constraint chkResposta2 check (resposta in ('Muito Tranquilo', 'Tranquilo', 'Neutro', 'Medo', 'Muito Medo'))
);

alter table Usuario add constraint fkPesquisa1 foreign key (fkPesquisa1) references Pesquisa1 (idPesquisa);
alter table Usuario add constraint fkPesquisa2 foreign key (fkPesquisa2) references Pesquisa2 (idPesquisa);

create table Especies (
idEspecies int primary key auto_increment,
nome varchar(45),
nomeCientifico varchar(45),
familia varchar(45),
descricao varchar(250)
);

alter table Usuario add constraint fkEspeciesFavoritas foreign key (fkEspecieFavorita) references Especies (idEspecies);

create table Publicacao (
idPublicacao int primary key auto_increment,
fkUsuario int,
constraint fkUsuarioPublicacao foreign key (fkUsuario) references Usuario (idUsuario),
conteudo varchar(250)
);

create table Comentario (
idComentario int primary key auto_increment,
fkUsuario int,
constraint fkUsuarioComentario foreign key (fkUsuario) references Usuario (idUsuario),
fkPublicacao int,
constraint fkPublicacaoComentario foreign key (fkPublicacao) references Usuario (idUsuario),
comentario varchar(250)
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