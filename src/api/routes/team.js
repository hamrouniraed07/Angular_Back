const express = require("express");
const teamController = require("../controllers/team");
var route = express.Router();

route.get("/team/api/get", teamController.getTeam);
route.get("/team/api/get/:id", teamController.getTeamById);
route.post("/team/api/post", teamController.postTeam);
route.put("/team/api/put/:id", teamController.updateTeam);
route.delete("/team/api/delete/:id", teamController.deleteTeam);

module.exports = route;
