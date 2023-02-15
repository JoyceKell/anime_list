const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;
