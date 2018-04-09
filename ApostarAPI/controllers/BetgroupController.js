var dbConnection = require('../services/ApostarService.js');

module.exports.createBetgroup = function createBetgroup (req, res, next) {
    var betgroup = req.params['betgroup'].value;
    /* TODO: db-function createBetgroup(Betgroup betgroup)
    dbConnection.createBetgroup(betgroup)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
        */
};

    module.exports.deleteBetgroup = function deleteBetgroup (req, res, next) {
        var id = req.swagger.params['id'].value;
        /* TODO: db-function deleteBetgroup(id)
        dbConnection.deleteBetgroup(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
            */
};

module.exports.showBetgroup = function showBetgroup (req, res, next) {
    var id = req.params['id'].value;
    /* TODO: db-function showBetgroup(id)
    dbConnection.showBetgroup(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
        */
};

module.exports.updateBetgroup = function updateBetgroup (req, res, next) {
    var id = req.params['id'].value;

    /* TODO: db-function updateBetgroup(id)
    dbConnection.updateBetgroup(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
        */
};