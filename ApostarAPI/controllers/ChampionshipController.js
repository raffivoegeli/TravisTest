var dbConnection = require('../services/ApostarService.js');

module.exports.showChampionship = function showChampionship (req, res, next) {
    var id = req.params['id'].value;
    //TODO: database-function showChampionship(id)
    /*
    dbConnection.showChampionship(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
     */
};

module.exports.showMatchesInChampionship = function showMatchesInChampionship (req, res, next) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    dbConnection.showMatchesInChampionship(id, function(error, matches) {
        if(matches) {
            let championshipname = "";
            let editMatches = [];

            championshipname = matches[0].championship;

            for(var i = 0; i < matches.length; i++) {
                var newMatch = new Object();
                newMatch.gamebegin = matches[i].gamebegin;
                newMatch.hometeam = matches[i].hometeam;
                newMatch.awayteam = matches[i].awayteam;
                newMatch.goalshome = matches[i].goalshome;
                newMatch.goalsaway = matches[i].goalsaway;

                editMatches.push(newMatch);
            }

            let jsonobject = [];
            jsonobject.push(editMatches);

            res.json(editMatches);
        } else {
            res.json('ERROR');
        }
    })

};

module.exports.addTeamsToChampionship = function addTeamsToChampionship(teams) {
    /*dbConnection.addTeamsToChampionship(teams, function(error, success) {
        if(success) {
            console.log('Successfully inserted teams');
        } else {
            console.log(error)
        }
    });*/
}