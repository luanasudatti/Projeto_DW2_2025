const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt")
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Yuri024681012",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [existingUsers] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.send({ msg: "Usuário já cadastrado" });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Inserir usuário com a senha criptografada
    await db.query(
      "INSERT INTO usuarios (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    res.send({ msg: "Cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro no cadastro:", err);
    res.status(500).send({ msg: "Erro no servidor" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [result] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password,
        (erro, result) =>{
          if(result){
            res.send({ msg: "Usuário logado com sucesso" });
          } else  {
            res.send({ msg:"Senha está incorreta" });
          }
        });

    } else {
      res.send({ msg: "Conta não encontrada" });
    }
  } catch (erro) {
    console.error("Erro no login:", erro);
    res.status(500).send({ msg: "Erro no servidor" });
  }
});


app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
