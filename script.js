$(document).ready(function() {
	$(".btn").click(function(){
        $(".main").slideDown('slow');
        $(".btn").fadeOut('slow');
        $(".navbar").show();
    });



});