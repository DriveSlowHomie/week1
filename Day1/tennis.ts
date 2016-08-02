enum Outcome {
  Won, Lost, Draw
}
let win = Outcome.Won;
let lose = Outcome.Lost;

alert("Sally has " + Outcome[win] + "! " + "But Tom has " + Outcome[lose] + "...");
console.log("Sally has " + Outcome[win] + "! " + "But Tom has " + Outcome[lose] + "...");
