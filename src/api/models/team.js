const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
  number: { type: Number, required: true },
  nationality: { type: String, required: true },
  image: { type: String, required: true },
});

const trophySchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
});

const coachSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  league: { type: String, required: true },
  logo: { type: String, required: true },
  stadium: { type: String, required: true },
  foundedYear: { type: Number, required: true },
  stadiumCapacity: { type: Number, required: true },
  description: { type: String },
  players: [playerSchema],
  trophies: [trophySchema],
  coach: coachSchema,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
