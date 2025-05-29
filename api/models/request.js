const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  requestId: { type: String, unique: true, index: true },
  type: { type: String, index: true },
  title: String,
  thumb: String,
  imdb_id: { type: String, index: true },
  tmdb_id: { type: String, index: true },
  tvdb_id: { type: String, index: true },
  users: Array,
  sonarrId: Array,
  radarrId: Array,
  approved: { type: Boolean, index: true },
  manualStatus: Number,
  pendingDefault: Object,
  seasons: Object,
  timeStamp: { type: Date, index: true },
});

module.exports = mongoose.model("Request", RequestSchema);
