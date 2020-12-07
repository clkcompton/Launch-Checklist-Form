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
     let castCargoMass = Number(cargoMassInput.value);


     event.preventDefault();
 
     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
     } else if (isNaN(castFuelLevel)) {
         alert("Invalid entry!");
     } else if (isNaN(castCargoMass)) {
         alert("Invalid entry!");
     } else if (typeof pilotNameInput.value !== 'string' || typeof copilotNameInput.value !== 'string') {
         alert("Invalid entry!");
     } else if (castFuelLevel < 10000) {
         document.getElementById("launchStatus").innerHTML = "Not ready for launch!";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Insufficient fuel level"
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready`; 
     } else if (castCargoMass > 10000) {
         document.getElementById("launchStatus").innerHTML = "Not ready for launch!";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerHTML = "Waaaay too much mass"
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready`; 
     } else {
        document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready`;
        document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready`; 
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = "green";
     }
   });
 });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
