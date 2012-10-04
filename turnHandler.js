(function($) {
	$(document).ready( function() {
		var board = $(".board");
		board.click(function (event) {
			var fieldX = event.offsetX 
				/ config.board.field.width;
			var fieldY = event.offsetY 
				/ config.board.field.height;
		});
	});
}) (jQuery);
