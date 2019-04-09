/*redimension*/
	$(document).ready(function(){
		resizeDiv();
	});
	window.onresize=function(event) {
    	resizeDiv();
	}
	function resizeDiv() {
      vph = $(window).height();
      vpW =$(window).width();
        if (vph > 623 && vpW > 767){
			$('.mainBlock').css({'height': vph });
		}else if(vph < 470 && vph>280 && (vph-280)>100 ){
			$('.mainBlock').css({'height': (vph-280) });
		}else {$('.mainBlock').css({"height":""}); }
	}
	/*redirect*/
	$('#link1,#link2,#link3,#link4,#titulo').click( function(){
		var href = $(this).find('a').attr('href');
		//regex validation;
		var re = /^(http[s]?:\/\/){1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
		if (!re.test(href)) {} 
		else{ window.location = href;}
	} );