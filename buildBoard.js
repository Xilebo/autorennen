//~ function buildBoard($) {
	$(document).ready( function() {
		var tileTemplate = $(".resources .tile");
		var board = $(".board");
		var row = 0;
		var col = 0;
		for ( var row = 0; row < 10; row++) {
			for ( var col = 0; col < 10; col++) {
				var newTile = tileTemplate.clone();
				newTile.addClass('row' + row);
				newTile.addClass('col' + col);
				board.appendTo(newTile);
			}
		}
	});
//~ }(jQuery);
