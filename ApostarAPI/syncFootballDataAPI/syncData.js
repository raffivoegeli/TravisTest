const https = require('https');




module.exports.getFixtures = function getFixtures() {
    let schedule = require("node-schedule");
    let rule = new schedule.RecurrenceRule();
//rule.minute = 40;
    rule.second = new schedule.Range(0,59,10);
    var jj = schedule.scheduleJob(rule, function(){
        //console.log("execute jj");

        https.get('https://api.football-data.org/v1/competitions/467/fixtures', (resp) => {

            let data = '';
            console.log('statusCode:', resp.statusCode);
            console.log('headers:', resp.headers);

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                var response = JSON.parse(data);
                //console.log(response.fixtures);

                for(let i = 0; i < response.fixtures.length; i++) {
                    logGame(response.fixtures[i]);
                }

            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    });
};

function logGame(fixture) {
    console.log(fixture.homeTeamName + " - " + fixture.awayTeamName + " = " + fixture.result.goalsHomeTeam + ":" + fixture.result.goalsAwayTeam)
}
