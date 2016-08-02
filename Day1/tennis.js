var Outcome;
(function (Outcome) {
    Outcome[Outcome["Won"] = 0] = "Won";
    Outcome[Outcome["Lost"] = 1] = "Lost";
    Outcome[Outcome["Draw"] = 2] = "Draw";
})(Outcome || (Outcome = {}));
var win = Outcome.Won;
var lose = Outcome.Lost;
alert("Sally has " + Outcome[win] + "! " + "But Tom has " + Outcome[lose] + "...");
console.log("Sally has " + Outcome[win] + "! " + "But Tom has " + Outcome[lose] + "...");
