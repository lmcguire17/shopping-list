$(document).ready(function() {
	console.log('ready');

	$('input').keyup(function(e) {

		var addItem = $('input').val();
		var newItem = "<li><span class='fa fa-trash-o fa-3x'></span><span class='item'>" + addItem + "</span><span class='fa fa-check-square fa-3x'></span></li>";
		
		if(e.keyCode == 13) {
				if($.trim(addItem) == '') {
					alert('Plese Enter an Item!');
				} else {

			$('ul').append(newItem);
			$('input').val('');
				}
		}
	});

	$('ul').on('click', '.fa-check-square', function () {
		$(this).parent().toggleClass('selected');
	});

	$('ul').on('click', '.fa-trash-o', function () {
		$(this).parent().fadeOut(500, function () {
			$(this).remove();

		})
	});
})