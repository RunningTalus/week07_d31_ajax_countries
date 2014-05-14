$(function() {

	// console.log('TEST!');
	$(document).on('click','.btn', function(){
		console.log('on click handler is WORKING');

			$.get('/countries', function(countries){ //res.send
			
			var list = $('<ul>');

			var listItems = countries.map(function(country) {
				return $('<li class = "all-countries">' + country.region + '</li>');
			});

			list.append(listItems);
				
			$('body').append(list);

		});
	});

});