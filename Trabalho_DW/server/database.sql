-- Script para criar o banco de dados e tabela de usuários
-- Execute este script no seu MySQL

-- Criar o banco de dados (se não existir)
CREATE DATABASE IF NOT EXISTS banco;

-- Usar o banco de dados
USE banco;

-- Criar a tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Verificar se a tabela foi criada
DESCRIBE usuarios;

-- Inserir um usuário de teste (opcional)
-- INSERT INTO usuarios (email, password) VALUES ('teste@teste.com', 'senha123');
