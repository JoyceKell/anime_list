const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Importe o modelo de usuário para o registro e login
const User = require("../models/user");
// Rota para registro de novos usuários
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Criptografa a senha antes de salvar no banco de dados

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Gera um token de autenticação JWT e envia no cabeçalho de resposta
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    res.header("Authorization", token).send({ user: newUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Rota para login de usuários existentes
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Senha incorreta" });
    }

    // Gera um token de autenticação JWT e envia no cabeçalho de resposta
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.header("Authorization", token).send({ user, token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
