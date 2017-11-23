// general functions
$(function() {
    // $("#profile").hide();
    $("#academy").hide();
    $("#skill").hide();
    $("#laboral").hide();
    $("#contact").hide();



    // eventos
    $("#profileButton").click(function(){
        $("#academy").hide();
        $("#profile").show();
        $("#skill").hide();
        $("#laboral").hide();
        $("#contact").hide();
    });

    $("#academyButton").click(function(){
        $("#academy").toggle();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").hide();
        $("#contact").hide();
    });

    $("#skillButton").click(function(){
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").toggle();
        $("#laboral").hide();
        $("#contact").hide();
    });

    $("#laboralButton").click(function(){
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").toggle();
        $("#contact").hide();
    });

    $("#contactButton").click(function(){
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").hide();
        $("#contact").toggle();
    });
});
