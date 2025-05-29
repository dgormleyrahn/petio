const mongoose = require("mongoose");

const FriendSchema = mongoose.Schema(
  {
    id: { type: String, unique: true, index: true },
    title: String,
    username: String,
    nameLower: { type: String, index: true },
    email: { type: String, unique: true, index: true },
    password: String,
    recommendationsPlaylistId: String,
    thumb: String,
    Server: Array,
    altId: String,
    lastIp: String,
    role: String,
    profile: { type: String, index: true },
    custom: Boolean,
    disabled: Boolean,
    quotaCount: Number,
    custom_thumb: String,
    lastLogin: Date,
    petioTimestamp: Date,
  },
  { collection: "friends" }
);

module.exports = mongoose.model("Friend", FriendSchema);
