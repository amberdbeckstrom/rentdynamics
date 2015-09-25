console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function(){
	
	$('#greenheader').hide();
	
	
	$('#greenmove[href="#"]').click(function(){
		$('#greenheader').slideToggle();
		$(this).animate({
			opacity: 0.5
		}, 80000, "swing", function(){
			
		});
	});


});

