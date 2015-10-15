console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function(){
	
	
	$('#greenheader').hide();
	$('#smenu').hide();
	
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
	
	//Accordian Menu2
	$('#accord[href="#"]').click(function(){
		$('#smenu').toggle();
			
	});


	//hides the menu if it is smaller than 746
function checkSize(){
    if ($(window).width() <= 746){
        // your code here
		$('#greenheader').hide();
    }
}

});

