const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: String,
  ratingKey: { type: Number, unique: true, index: true },
  key: String,
  guid: String,
  studio: String,
  type: String,
  titleSort: String,
  contentRating: String,
  summary: String,
  rating: Number,
  year: { type: Number, index: true },
  tagline: String,
  thumb: String,
  art: String,
  duration: Number,
  originallyAvailableAt: String,
  addedAt: Number,
  updatedAt: Number,
  primaryExtraKey: String,
  ratingImage: String,
  Media: Array,
  Genre: Array,
  Director: Array,
  Writer: Array,
  Country: Array,
  Role: Array,
  idSource: String,
  externalId: String,
  imdb_id: { type: String, index: true },
  tmdb_id: { type: String, index: true },
  petioTimestamp: { type: Date, index: true },
});

module.exports = mongoose.model("Movie", MovieSchema);

// ratingKey
