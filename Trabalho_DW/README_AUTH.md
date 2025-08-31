# Sistema de Autenticação - Projeto DW2

Este projeto agora inclui um sistema completo de login e cadastro integrado ao site de carros.

## Funcionalidades Implementadas

### Frontend
- **Login**: Formulário de login com validação
- **Cadastro**: Formulário de registro com validação de senha
- **Interface moderna**: Design responsivo com animações
- **Navegação integrada**: Link "Login" no header principal

### Backend
- **Servidor Express**: API REST para autenticação
- **Banco MySQL**: Armazenamento seguro de usuários
- **Criptografia**: Senhas criptografadas com bcrypt
- **Validação**: Verificação de usuários existentes

## Estrutura de Arquivos

```
src/
├── componentes/
│   ├── Login.jsx          # Componente de login
│   ├── Register.jsx       # Componente de cadastro
│   ├── Auth.jsx           # Gerenciador de estado
│   └── Header.jsx         # Header atualizado com link de login
├── style/
│   └── Auth.css           # Estilos para autenticação
└── server/
    ├── index.js           # Servidor backend
    └── package.json       # Dependências do servidor
```

## Instalação e Configuração

### 1. Instalar Dependências do Frontend
```bash
npm install
```

### 2. Instalar Dependências do Backend
```bash
cd server
npm install
```

### 3. Configurar Banco de Dados
Crie um banco MySQL chamado `banco` e execute:
```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Configurar Variáveis do Banco
No arquivo `server/index.js`, atualize as credenciais:
```javascript
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "SUA_SENHA_AQUI",
  database: "banco",
});
```

## Como Usar

### Iniciar o Frontend
```bash
npm run dev
```

### Iniciar o Backend
```bash
npm run server
```

### Acessar a Autenticação
1. Clique no link "Login" no header
2. Use `/auth` na URL para acessar diretamente
3. Alternar entre login e cadastro usando os links na parte inferior

## Tecnologias Utilizadas

- **Frontend**: React, Formik, Yup, Axios
- **Backend**: Node.js, Express, MySQL2, bcrypt
- **Estilos**: CSS puro com animações e responsividade
- **Validação**: Yup para validação de formulários

## Endpoints da API

- `POST /register` - Cadastro de usuário
- `POST /login` - Autenticação de usuário

## Segurança

- Senhas criptografadas com bcrypt (10 rounds)
- Validação de entrada com Yup
- Verificação de usuários duplicados
- Sanitização de dados

## Personalização

Para personalizar o sistema:
1. Modifique os estilos em `src/style/Auth.css`
2. Ajuste as validações nos componentes
3. Personalize as mensagens de erro/sucesso
4. Adicione campos adicionais no cadastro se necessário

## Suporte

Em caso de problemas:
1. Verifique se o banco MySQL está rodando
2. Confirme se as credenciais estão corretas
3. Verifique se as portas não estão sendo usadas por outros serviços
4. Consulte os logs do servidor para erros específicos
