// Write your JavaScript code here!

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    const list = [];
    const pilot = document.getElementById("pilotName");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");

    console.log(pilot.value);
    console.log(copilot.value);
    console.log(fuelLevel.value);
    console.log(cargoMass.value);
    console.log("console log complete");

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  })
  // set up variables for document, list, pilot, copilot, fuelLevel, cargoLevel
  // use variables to call formSubmission

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});
