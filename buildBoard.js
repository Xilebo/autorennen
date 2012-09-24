function($) {
	$(document).ready( function() {
		var tileTemplate = $(".resources .tile");
		var board = $(".board");
		var row = 0;
		var col = 0;
		for ( var row = 0; row < config.board.rows; row++) {
			for ( var col = 0; col < config.board.columns; col++) {
				tileTemplate.clone()
					.addClass('row' + row)
					.addClass('col' + col)
					.appendTo(board);
			}
		}
	});
}(jQuery);
