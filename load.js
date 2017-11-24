// stretch to browser size
$(function(){
	var elements = ["#frontpage", "#game-main", "#web-main"];
	for (var i = 0; i < elements.length; i++) {
		var $content = $(elements[i]);
		var $window = $(window).on('resize', function(){
			if ($content.height() < $(this).height()) {
				var height = $(this).height();
				$content.height(height);
			}
		}).trigger('resize'); //on page load
	}
});