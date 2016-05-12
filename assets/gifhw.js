// Initial array of animals
	var animalArray = ['Giraffe', 'Zebra', 'Lion', 'Cat'];


// displayAnimalInfo function now re-renders the HTML to display the appropriate content. 
	function displayAnimalInfo(){

		var animal = $(this).attr('data-name');

		// api key (from the website)
		var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + animal;

		
		// Creates AJAX call for the specific movie being 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			// Creates a generic div to hold the movie
			var animalDiv = $('<div class="animal">');

			// Retrieves the Rating Data
			var rating = response.Rated;

			// Creates an element to have the rating displayed
			var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rrating
			animalDiv.append(pOne);
			

			// Creates an element to hold the image 
			var image = $('<img>').attr("src", response.Poster);

			// Appends the image
			animalDiv.append(image);

			// Puts the entire Movie above the previous movies.
			//$('#moviesView').prepend(movieDiv);


	// Generic function for displaying movie data 
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
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addAnimal').on('click', function(){

		// This line of code will grab the input from the textbox
		var animalInput = $('#animalInput').val().trim();

		// The movie from the textbox is then added to our array
		animalArray.push(animalInput);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo
	$(document).on('click', '.animal', displayAnimalInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();
		
		});

	}


