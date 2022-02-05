$(document).ready(function () {
    
    $("td").click(function() {
        var act = $(this).text();
        if (act != "Not Available") {
            $(this).toggleClass("tdHighlight");
        }
    });
});