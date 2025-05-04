const Team = require("../models/team");

const getTeam = async (request, response) => {
  try {
    const result = await Team.find().populate("trophies").populate("players").populate("coach");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("Erreur lors du GET:", error);
    response.status(500).send("Erreur serveur");
  }
};

const deleteTeam = async (request, response) => {
  try {
    const teamId = request.params.id;
    const result = await Team.findByIdAndDelete(teamId);
    if (!result) {
      return response.status(404).send("Équipe non trouvée");
    }
    console.log("Équipe supprimée :", result);
    response.send("deleted");
  } catch (error) {
    console.error("Erreur lors du DELETE:", error);
    response.status(500).send("Erreur serveur");
  }
};

const postTeam = async (request, response) => {
  try {
    const input = request.body;
    const newTeam = new Team({
      name: input.name,
      country: input.country,
      league: input.league,
      logo: input.logo,
      stadium: input.stadium,
      foundedYear: input.foundedYear,
      stadiumCapacity: input.stadiumCapacity,
      description: input.description,
      players: input.players, // Assurer que players soit un tableau de joueurs existants
      trophies: input.trophies, // Assurer que trophies soit un tableau existant
      coach: input.coach, // Assurer que coach soit un objet existant
    });
    await newTeam.save();
    response.send(newTeam);
  } catch (error) {
    console.error("Erreur lors du POST:", error);
    response.status(500).send("Erreur serveur");
  }
};

const updateTeam = async (request, response) => {
  try {
    const input = request.body;
    const result = await Team.findByIdAndUpdate(request.params.id, input, {
      new: true,
    });
    if (!result) {
      return response.status(404).send("Équipe non trouvée");
    }
    console.log("Équipe mise à jour :", result);
    response.send(result);
  } catch (error) {
    console.error("Erreur lors du PUT:", error);
    response.status(500).send("Erreur serveur");
  }
};

const getTeamById = async (request, response) => {
  try {
    const teamId = request.params.id;
    const team = await Team.findById(teamId)
      .populate("trophies")
      .populate("players")
      .populate("coach");

    if (!team) {
      return response.status(404).send("Équipe non trouvée");
    }

    response.send(team);
  } catch (error) {
    console.error("Erreur lors du GET /:id :", error);
    response.status(500).send("Erreur serveur");
  }
};

const teamController = {
  getTeam,
  deleteTeam,
  getTeamById,
  postTeam,
  updateTeam,
};

module.exports = teamController;
