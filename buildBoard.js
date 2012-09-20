buildBoard = function($) {
	$(document).ready( function() {
		var tileTemplate = $(".resources .tile");
		var board = $(".board");
		var row = 0;
		var col = 0;
		for ( var row = 0; row < conf.board.rows; row++) {
			for ( var col = 0; col < conf.board.columns; col++) {
				tileTemplate.clone()
					.addClass('row' + row)
					.addClass('col' + col)
					.appendTo(board);
			}
		}
	});
}(jQuery);
