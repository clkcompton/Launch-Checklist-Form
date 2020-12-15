window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `;
      });
   });


   let form = document.querySelector("form");
 //   let button = document.getElementById("formSubmit");
   form.addEventListener("submit", function(event) {
     let pilotNameInput = document.querySelector("input[name=pilotName]");
     let copilotNameInput = document.querySelector("input[name=copilotName]");
     let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
     let cargoMassInput = document.querySelector("input[name=cargoMass]");
     
     let castFuelLevel = Number(fuelLevelInput.value);
     console.log("FUEL LEVEL", castFuelLevel)
     let castCargoMass = Number(cargoMassInput.value);
     console.log("CARGO MASS", castCargoMass)

     event.preventDefault();
 
     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         return alert("All fields are required!");
     } else if (isNaN(castFuelLevel)) {
         return alert("Invalid entry!");
     } else if (isNaN(castCargoMass)) {
         return alert("Invalid entry!");
     } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
         return alert("Invalid entry!");
     } 

      document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready`; 
      document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready`;

      if (castCargoMass <= 10000 && castFuelLevel >= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
        return;
      }
      
      document.getElementById("launchStatus").innerHTML = "Not ready for launch!";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = 'visible';

      if (castFuelLevel < 10000) {
         document.getElementById("fuelStatus").innerHTML = "Insufficient fuel level"
      } else document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"

      if (castCargoMass > 10000) {
         document.getElementById("cargoStatus").innerHTML = "Waaaay too much mass"
      } else document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"

   });
 });