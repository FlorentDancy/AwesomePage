/**
 * Created by Laval on 22/07/14.
 */

var ouvert=0;

$(document).ready(function(){
    /* Au démarrage, on teste la taille de l'écran pour lancer sidr ou sidrDisplace*/
    if (window.matchMedia("(min-width: 40.063em)").matches) {
        $('#left-menu').sidr({displace:false});
    } else{
        $('#left-menu').sidr();
    }

    /*Lors d'un resize, on vérifie la taille de l'écran pour mettre le bon sidr*/
    $(window).resize(function() {
        if (window.matchMedia("(min-width: 40.063em)").matches) {
            $('#left-menu').sidr({displace:false});
        } else{
            $('#left-menu').sidr();
        }
    });

    /*Lors du clic, on gère la position de l'icône en fonction de la taille de l'écran et de l'état ouvert ou non*/
    $('#left-menu').on( "click", function() {
        if (window.matchMedia("(min-width: 40.063em)").matches) {
               if (ouvert==0){
                   $('#left-menu').css( "margin-left", "260px" );
                   ouvert=1;
               } else{
                   $('#left-menu').css( "margin-left", "0px" );
                   ouvert=0;
               }
        } else {
            if (ouvert==0){
                ouvert=1;
            } else{
                $('#left-menu').css( "margin-left", "0px" );
                ouvert=0;
            }
        }
    });
    $(document).foundation();

});

