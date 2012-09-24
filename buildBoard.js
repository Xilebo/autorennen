(function($) {
	$(document).ready( function() {
		var board = $(".board");
		
		board.height(config.board.rows * config.board.field.height);
		board.width(config.board.columns * config.board.field.width);
		
	});
}) (jQuery);
