let dbConnection = require('./databaseConnection.js');

// User-Functions
// TODO: module.exports.showUserById = function showUserById(id) {}
// TODO: module.exports.registerUser = function registerUser() {}
// TODO: module.exports.deleteUser = function deleteUser(id) {}
// TODO: module.exports.updateUser = function updateUser() {}

// Betgroup-Functions
// TODO: module.exports.showBetgroupById = function showBetgroupById(id) {}
// TODO: module.exports.addBetgroup = function addBetgroup() {}
// TODO: module.exports.updateBetgroup = function updateBetgroup() {}
// TODO: module.exports.deleteBetgroup = function deleteBetgroup(id) {}

// Championship-Functions
// TODO: module.exports.showChampionship = function showChampionship(id) {}
module.exports.showMatchesInChampionship = function showMatchesInChampionship(id, callback) {
    let query = 'select * from matchesinchampionshipview where championshipid = ' + id +';';

    dbConnection.query(query, function(err, matches){
        callback(err, matches);
    });

};
// TODO: module.exports.addChampionship = function addChampionship() {}

// TODO: module.exports.addTeamsToChampionship = function addTeamsToChampionship(teams, callback) {
    //TODO: Create StoredProcedure
/*

    let query = 'insert into team (name, football_data_id) values (';
    for(let i = 0; i < teams.length; i++) {
        if(i != 0) {
            query += ',(';
        }

        query += '\'' + teams[i] + '\',' + i + ')';
    }
    query += ';';

    console.log(query);

    dbConnection.query(query, function(error, success) {
        callback(error, success);
    });

}
*/

// Bet-Functions
