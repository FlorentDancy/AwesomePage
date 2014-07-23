/**
 * Created by Laval on 22/07/14.
 */

$(document).ready(function(){

    var compteur=1;
    $('#left-menu').on( "click", function() {
        if (window.matchMedia("(min-width: 40.063em)").matches) {
            $('#left-menu').sidr({displace:false});
               if (compteur==0){
                   $( this ).css( "margin-left", "260px" );
                   compteur=1;
               } else{
                   $( this ).css( "margin-left", "0px" );
                   compteur=0;
               }
        } else {
            $('#left-menu').sidr();
            if (compteur==0){

                compteur=1;
            } else{
                compteur=0;
            }
        }
    });
    $(document).foundation();

});

