var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets". ***DONE***
*/
var el = document.getElementById("planets");
planets.forEach(function(item){
	var output = "planet: " + item;
	// console.log("", output);
	el.innerHTML += "<div>" + output + "</div>";
})

// Use the map method to create a new array where the first letter of each planet is capitalized

var capPlanets = planets.map(function(planets){return planets.charAt(0).toUpperCase() + planets.slice(1);})
	el.innerHTML += "<div>" + capPlanets + " </div>";

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(eFilter);
	el.innerHTML += "<div>" + ePlanets + " </div>";

//this array does the sorting for planets with "e", then passes that into ePlanets
function eFilter (e){
	if(e.toLowerCase().includes("e")) {
		return e;
	}
}

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var wordString = words.reduce(function(prev, curr){return prev + " " + curr + " "});
el.innerHTML += "<div>" + wordString + ".</div>";

