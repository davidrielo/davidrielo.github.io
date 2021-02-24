/**
 * Created by davidrielo on 14/04/2019.
 */
$(".navbar-wrapper").css('visibility: hidden');
$(document).ready(function() {

    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");
        counter++;
        c++;

        if(counter == 101) {
            clearInterval(i);
            $(".loading-page").fadeOut();
            $(".navbar-wrapper").css('visibility: visible');
        }
    }, 10);
});