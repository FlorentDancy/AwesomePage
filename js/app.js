/**
 * Created by Laval on 22/07/14.
 */

$(document).ready(function(){


    if (window.matchMedia("(min-width: 40.063em)").matches) {
        $('#left-menu').sidr({displace:false});
    } else {
        $('#left-menu').sidr();
    }

    $(document).foundation();

});

