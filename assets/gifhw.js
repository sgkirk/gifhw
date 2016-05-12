// Initial array of animals
	var animalArray = ['Giraffe', 'Zebra', 'Lion', 'Cat'];


// Show buttons
	function renderButtons(){ 

		// Deletes the animals prior to adding new animals (get rid of repeat buttons)
		$('#animalButtons').empty();

		// Loops through the array of animals
		for (var i = 0; i < animalArray.length; i++){

		// Then dynamicaly generates buttons for each animal in the array
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

	// Create new button

	renderButtons();

	//enter works as click submit

	return false;

});

//console.log(animalArray);


//Display the animalgifs
function displayGifs(){
		
	var animal = $(this).attr('data-name');
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";

	// ajax request
	$.ajax({url: queryUrl, method: 'GET'}).done(function(response){

	// empty old gifs
	$('#animals').empty();

	});

};
