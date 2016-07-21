$(document).ready(function() {
 
 /*-----Top-----*/
	var top = document.getElementById('top');
	top.addEventListener('click', function(){ // for up
		var scrollDuration = 500,
    	scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        	if ( window.scrollY != 0 ) {
            	window.scrollBy( 0, scrollStep );
        	}
        	else clearInterval(scrollInterval);
    	},15);
	});

	window.addEventListener('scroll', function(e){ //hide responsive
		if($(window).width()>768){
			if(getScrollPos() != 0){
				$('#top').css({'visibility': 'visible', 'opacity': '0.5'});
			}else{
				$('#top').css({'visibility': 'hidden', 'opacity': '0'});
			}
		}else{
			if(getScrollPos() != 0){
				$('#top').hide();
			}else{
				$('#top').hide();
			}
		}
	});

	function getScrollPos(){ // posicion del scroll
		var top = this.scrollY,
	        left = this.scrollX;
	  	return top;
	}

 /*Animacion for scroll*/
    $('a.scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});
});