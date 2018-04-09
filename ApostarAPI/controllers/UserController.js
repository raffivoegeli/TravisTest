var dbConnection = require('../services/ApostarService.js');

module.exports.registerUser = function registerUser(req, res, next) {
    // TODO: db-function: registerUser(User user);
    /*
    dbConnection.registerUser()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
        */
}


module.exports.showUser = function showUser (req, res, next) {
    var id = req.params['id'].value;

    // TODO: db-function: showUser(id);
    /*
    dbConnection.showUser(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
    */
};

module.exports.deleteUser = function deleteUser (req, res, next) {
    var id = req.params['id'].value;

    // TODO: db-function: deleteUser(id);
    /*
    dbConnection.deleteUser(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
    */
};

module.exports.updateUser = function updateUser (req, res, next) {
    var id = req.params['id'].value;
    // TODO: db-function: updateUser(id);
    /*
    dbConnection.updateUser(id)
    .then(function (response) {
        utils.writeJson(res, response);
    })
    .catch(function (response) {
        utils.writeJson(res, response);
    });
    */
};