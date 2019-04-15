/**
 * Created by davidrielo on 15/04/2019.
 */
// todo check cookie acceptance here otherwise
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var isMobile = function (size) {
    return size < 768;
};

if (isMobile(width) ) {
    // disable menu
    $(".navbar-wrapper").hide();
}

var notice = new SimpleGDPR({
    theme: 'modern',
    animation: 'slide',
    float: 'bottom-right',
    link: 'https://privacy.google.com/intl/en_en/businesses/processorterms/',
    callback: function () {
        notice.close();
        if (isMobile(width) ) {
            // disable menu
            $(".navbar-wrapper").show();
        }
    }

});