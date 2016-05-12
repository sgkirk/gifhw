// Initial array of animals
	var animalArray = ['Giraffe', 'Zebra', 'Lion', 'Cat'];


// Show buttons
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#animalButtons').empty();

		// Loops through the array of movies
		for (var i = 0; i < animalArray.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('animal'); // Added a class 
		    a.attr('data-name', animalArray[i]); // Added a data-attribute
		    a.text(animalArray[i]); // Provided the initial button text
		    $('#animalButtons').append(a); // Added the button to the HTML
		}
	};

	renderButtons();

// Add user input to animalArray

$('#addAnimal').on('click', function(){

	var userInput = $('#animalInput').val().trim();

	animalArray.push(userInput);

	renderButtons();

	return false;

});

console.log(animalArray);