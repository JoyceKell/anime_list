const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const animeRouter = require("./routes/animeRouter");
const authRouter = require("./routes/authRouter");

const app = express();

// Configuração do MongoDB
const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/animelist";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração do body-parser
app.use(bodyParser.json());

// Configuração das rotas
app.use("/api/auth", authRouter);

app.use("/api/animes", animeRouter);

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message });
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
