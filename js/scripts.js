$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
});


$(document).ready(function(){
    $("#alerta").click(function(event){
    alert("Redirecting you to jQuery.com!");
    });
});

$(document).ready(function(){
    $("#popupOffer").hover(function(){
        $("#description").text("Over 85,000+ awesome financial people have joined our financial community – and you're awesome, too!");
    });
});
