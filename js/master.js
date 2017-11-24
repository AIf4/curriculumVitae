// general functions
$(function() {

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


        $("#academy").show();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").hide();
        $("#contact").hide();

    });

    $("#skillButton").click(function(){
        var chart = new charts();
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").show();
        $("#laboral").hide();
        $("#contact").hide();
        chart.skillCharts();
        // (new charts()).showCharts();
    });

    $("#laboralButton").click(function(){
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").show();
        $("#contact").hide();
    });

    $("#contactButton").click(function(){
        $("#academy").hide();
        $("#profile").hide();
        $("#skill").hide();
        $("#laboral").hide();
        $("#contact").show();
    });
});
