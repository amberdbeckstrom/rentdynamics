console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function(){
	
	$('#greenheader').hide();
	
	  // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
	
	$('#greenmove[href="#"]').click(function(){
		$('#greenheader').slideToggle();
		$(this).animate({
			opacity: 0.5
		}, 80000, "swing", function(){
			
		});
	});

	//Function to the css rule
function checkSize(){
    if ($(window).width() <= 746){
        // your code here
		$('#greenheader').hide();
    }
}






});

