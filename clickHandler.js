(function($) {
	$(document).ready( function() {
		var board = $(".board");
		var boardOffset = board.offset();
		board.click(function (event) {
			var clickedField = {
				x : NaN,
				y : NaN
			};
			clickedField.x = Math.floor((event.pageX - boardOffset.left)
				/ config.board.field.width);
			clickedField.y = Math.floor((event.pageY - boardOffset.top)
				/ config.board.field.height);
		});
	});
}) (jQuery);
