buildBoard = function($) {
	$(document).ready( function() {
		var fieldTemplate = $(".resources .field");
		var board = $(".board");
		
		board.css("background-image", "url("
			+ config.board.background_image
			+ ")");
		
		var row = 0;
		var col = 0;
		for ( var row = 0; row < config.board.rows; row++) {
			for ( var col = 0; col < config.board.columns; col++) {
				fieldTemplate.clone()
					.addClass('row' + row)
					.addClass('col' + col)
					.appendTo(board);
			}
		}
	});
}(jQuery);
