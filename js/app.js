$(document).ready(function() {
	console.log('ready');

	$('textarea').keypress(function(e) {

		var addItem = $('textarea').val();
		var trashIcon = "<li class='trash-icon'><i class='fa fa-trash-o fa-3x'></i></li>";
		var checkIcon = "<li class='check-icon'><i class='fa fa-check-square fa-3x'></i></li>";

		if(e.keyCode == 13) {
			$('ul').append(trashIcon);
			$('ul').append(addItem);
			$('ul').append(checkIcon);
			
		}
	
	});


})