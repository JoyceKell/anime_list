const express = require("express");
const Anime = require("../models/anime");
const auth = require("../auth");

const animeRouter = express.Router();

// Rota para criar um anime
animeRouter.post("/", auth.verifyToken, (req, res, next) => {
  Anime.create(req.body)
    .then((anime) => {
      res.statusCode = 201;
      res.json(anime);
    })
    .catch((err) => next(err));
});

// Rota para obter todos os animes
animeRouter.get("/", auth.verifyToken, (req, res, next) => {
  Anime.find()
    .then((animes) => {
      res.json(animes);
    })
    .catch((err) => next(err));
});

// Rota para obter um anime por ID
animeRouter.get("/:animeId", auth.verifyToken, (req, res, next) => {
  Anime.findById(req.params.animeId)
    .then((anime) => {
      if (anime) {
        res.json(anime);
      } else {
        const err = new Error(
          `Anime com o ID ${req.params.animeId} não encontrado.`
        );
        err.status = 404;
        next(err);
      }
    })
    .catch((err) => next(err));
});

// Rota para atualizar um anime por ID
animeRouter.put("/:animeId", auth.verifyToken, (req, res, next) => {
  Anime.findByIdAndUpdate(req.params.animeId, { $set: req.body }, { new: true })
    .then((anime) => {
      if (anime) {
        res.json(anime);
      } else {
        const err = new Error(
          `Anime com o ID ${req.params.animeId} não encontrado.`
        );
        err.status = 404;
        next(err);
      }
    })
    .catch((err) => next(err));
});

// Rota para excluir um anime por ID
animeRouter.delete("/:animeId", auth.verifyToken, (req, res, next) => {
  Anime.findByIdAndDelete(req.params.animeId)
    .then((anime) => {
      if (anime) {
        res.json(anime);
      } else {
        const err = new Error(
          `Anime com o ID ${req.params.animeId} não encontrado.`
        );
        err.status = 404;
        next(err);
      }
    })
    .catch((err) => next(err));
});

module.exports = animeRouter;
