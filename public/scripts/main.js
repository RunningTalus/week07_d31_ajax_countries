$(function() {

	$(document).on('click','.btn', function(){
		console.log('on click handler is WORKING');

			$.get('/countries', function(countries){ 
			
			var list = $('<ul>');

			var listItems = countries.map(function(country) {
				return $('<li class = "all-countries">' + country.name + '</li>');
			});

			list.append(listItems);
				
			$('body').append(list);

		});
	});

});