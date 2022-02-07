$(document).ready(function () {
    
    $("td").click(function() {
        var act = $(this).text();
        if (act != "Not Available") {
            $(this).toggleClass("tdHighlight");
        }

        if ($(this).hasClass("tdHighlight")) {
        $('#displaySelected').css("visibility","visible");
        $('#displaySelected').css("margin top" , "2em");
        $('#result').append("<p>" + act + "</p>");
    
        } else {
        $('#result p:contains('+act+')').remove();

        if($('#result').has('p').length == false) {
            $('#displaySelected').css("visbility","hiden");
            $('#displaySelected').css("margin-top","0");
            

        }
    } 




    });

    

});