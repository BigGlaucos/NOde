CREATE DATABASE Social_Midia;
USE Social_Midia;

CREATE TABLE td_user(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);
UPDATE  td_user SET publi_qtd = 3 where id <=10 ;

ALTER TABLE td 



INSERT INTO td_user (nome, email, senha) VALUES
    ('Maria Silva', 'maria.silva@example.com', 'senha123'),
    ('Pedro Santos', 'pedro.santos@example.com', '456pass'),
    ('Ana Souza', 'ana_souza@example.com', 'mysecret!'),
    ('Rafael Lima', 'rafaellima@example.com', 'lima456'),
    ('Carolina Pereira', 'carolina@example.com', 'carol789'),
    ('Lucas Oliveira', 'lucas.oliveira@example.com', 'oliveira1'),
    ('Beatriz Rodrigues', 'beatriz_rodrigues@example.com', '12345678'),
    ('Guilherme Alves', 'guilherme.alves@example.com', 'guilherme@123'),
    ('Isabela Martins', 'isabela.martins@example.com', 'isamartins!'),
    ('Bruno Costa', 'bruno.costa@example.com', 'costabr@987');


CREATE TABLE td_publi(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    comentario VARCHAR(300),
    likes int ,
    publi_name VARCHAR(50) ,
    publi_data TIMESTAMP NOT NULL,
    tipo_id INT NOT NULL,
    FOREIGN KEY (tipo_id) REFERENCES td_tipo (id)
);

CREATE TABLE td_tipo(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        tipo_archive VARCHAR(500) NOT NULL
); 
	INSERT INTO td_tipo (tipo_archive) VALUES ("Foto"),("Video");


CREATE TABLE td_Publi_compartilhada(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_compartilhada INT NOT NULL,
    id_user_send INT NOT NULL,
    id_user_recive INT NOT NULL,
    FOREIGN KEY (id_user_send) REFERENCES td_user (id),
    FOREIGN KEY (id_user_recive) REFERENCES td_user (id),
    FOREIGN KEY (id_compartilhada) REFERENCES td_publi (id)
);