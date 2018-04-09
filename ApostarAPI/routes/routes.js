var express = require('express');
var router = express.Router();

var championshipController = require('../controllers/ChampionshipController');
var userController = require('../controllers/UserController');
var betgroupController = require('../controllers/BetgroupController');
var betController = require('../controllers/BetController');

//router.get('/',);

// Championship Calls
router.get('/championship/:id', championshipController.showChampionship);
router.get('/championship/:id/matches', championshipController.showMatchesInChampionship);

// User Calls
router.get('/user/:id', userController.showUser);
router.put('/user/:id', userController.updateUser);
router.post('/user/register', userController.registerUser);
router.delete('/user/:id', userController.deleteUser);

// Betgroup Calls
router.get('/betgroup/:id', betgroupController.showBetgroup);
router.put('/betgroup/:id', betgroupController.updateBetgroup);
router.post('/betgroup/create', betgroupController.createBetgroup);
router.delete('/betgroup/:id', betgroupController.deleteBetgroup);
//router.get('/betgroup/:id/users', betgroupController.showUsersInBetgroup);

// Bet Calls
//router.get('/betgroup/:id/user/:id/bets', betController.getBetsByBetgroupUser);

module.exports = router;