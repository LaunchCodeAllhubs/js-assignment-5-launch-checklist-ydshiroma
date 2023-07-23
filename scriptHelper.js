// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   // validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
   if (testInput == "") {
     return "Empty";
   } else if (isNaN(Number(testInput))) {
     return "Not a Number";
   } else {
     return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const correctValues = {
    pilot: "Not a Number",
    copilot: "Not a Number",
    fuelLevel: "Is a Number",
    cargoLevel: "Is a Number"
  }

  if (correctValues.pilot == validateInput(pilot.value) && correctValues.copilot == validateInput(copilot.value) && correctValues.fuelLevel == validateInput(fuelLevel.value) && correctValues.cargoLevel == validateInput(cargoLevel.value)) {
    document.querySelector("div[id=faultyItems]").style.visibility = "visible";

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch`

    let launchReady = true;

    if ( Number(fuelLevel.value) < 10000) {
      // Fuel level too low for launch
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
      launchReady = false;
    } else {
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    };

    if ( Number(cargoLevel.value) > 10000) {
      // Cargo mass too heavy for launch
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
      launchReady = false;
    } else {
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    };

    let launchStatus = document.getElementById("launchStatus");

    if (launchReady == true) {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "#419F6A";
    } else {
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "#C7254E";
    }

    event.preventDefault();
  } else {
    window.alert("Make sure to enter valid information for each field!");
    event.preventDefault();
  }

// Using the input values, update the shuttle requirements.
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
