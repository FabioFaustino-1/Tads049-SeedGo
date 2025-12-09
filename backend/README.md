# SeedGo — Sistema de Gestão Agrícola

## 🚀 Sobre o Projeto

SeedGo é um sistema de gestão agrícola que permite o cadastro, edição, listagem e exclusão de agricultores.  
A aplicação possui backend em Spring Boot (Java + JPA + MySQL) e frontend em React, consumindo a API REST do backend.  
O objetivo é servir como projeto para apresentação acadêmica, demonstrando integração entre front-end e back-end e operações CRUD via API.

## 🧑‍💻 Funcionalidades

- Autenticação simples (login fake) — para demonstrar fluxo de login/logout  
- CRUD completo de agricultores (Create, Read, Update, Delete)  
- Integração frontend ↔ backend via fetch/REST API  
- Persistência de dados em banco MySQL  
- Estrutura organizada de pastas (separação entre backend e frontend)

## 📦 Tecnologias utilizadas

### Backend  
- Java 17  
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- MySQL (ou outro BD compatível com JPA)  
- Maven  

### Frontend  
- React.js  
- Vite (ou Create React App, conforme configuração)  
- Fetch API (ou axios, se preferir)  

## 🛠️ Pré-requisitos para rodar localmente

- Java 17+  
- Maven  
- MySQL ou MariaDB rodando localmente  
- Node.js + npm  
- (Opcional) IDE para backend — Spring Tools / STS / IntelliJ / etc  

## 🎯 Como rodar o projeto localmente

### 1. Banco de dados  
- Crie o banco de dados no MySQL (por exemplo, `seed_go`)  
- Importe os scripts SQL com as tabelas e dados iniciais (se existir)  

### 2. Rodar backend  
```bash
cd backend
mvn clean install
mvn spring-boot:run
