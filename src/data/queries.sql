CREATE TABLE
    estudante (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES turma (id)
    );

CREATE TABLE
    docente (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL
    );

CREATE TABLE
    turma (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        modulo VARCHAR(255) DEFAULT 0
    );

CREATE TABLE
    docente_turma (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES docente (id),
        FOREIGN KEY (turma_id) REFERENCES turma (id)
    );

CREATE TABLE
    estudante_hobby (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES estudante (id),
        FOREIGN KEY (hobby_id) REFERENCES hobby (id)
    );

CREATE TABLE
    hobby (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
    );

CREATE TABLE
    docente_especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES docente (id),
        FOREIGN KEY (especialidade_id) REFERENCES especialidade (id)
    );

CREATE TABLE
    especialidade (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
    );

SELECT * FROM estudante;

SELECT * FROM docente;

SELECT * FROM turma;

SELECT * FROM estudante_hobby;

SELECT * FROM hobby;

SELECT * FROM docente_especialidade;

SELECT * FROM especialidade;