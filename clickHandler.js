(function($) {
	$(document).ready( function() {
		var board = $(".board");
		var boardOffset = board.offset();
		board.click(function (event) {
			var clickedField = {
				X : NaN,
				Y : NaN
			};
			clickedField.X = Math.floor((event.pageX - boardOffset.left)
				/ config.board.field.width);
			clickedField.Y = Math.floor((event.pageY - boardOffset.top)
				/ config.board.field.height);
		});
	});
}) (jQuery);
