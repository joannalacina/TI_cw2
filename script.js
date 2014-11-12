$("#logo").click(function() {
  $("#logo").fadeTo('slow',0.7);
});

$("#footer p").append("<p>tel: 600 405 406</p>");
$("#nav3").remove();

$("#footer p").css("font-family","Arial");

$("span").html("Usługi geodezyjno-kartograficzne");

  $(".navbar").hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');
    }
  );
  
 
 $("input").focus(function(){
      $("input").css("outline-style","solid");
       $("input").css("outline-color","blue");
    });    
    
//=================================================================================================
 
    $("#wyslij").click(function() {
            if ($("#imie").val().length == 0) {
                $("#imie").css('outline-color', 'red');
}
});


    $("#wyslij").click(function() {
            if ($("#nazwisko").val().length == 0) {
                $("#nazwisko").css('outline-color', 'red');
}
});


    $("#wyslij").click(function() {
            if ($("#mail").val().length == 0) {
                $("#mail").css('outline-color', 'red');
    }
});


    $("#wyslij").click(function() {
            if ($("#wiadomosc").val().length == 0) {
                $("#wiadomosc").css('outline-color', 'red');              
    }
});


    $("#wyslij").click(function() {
            if ($("#imie").val().length == 0 ||$("#nazwisko").val().length == 0||$("#mail").val().length == 0||$("#wiadomosc").val().length == 0){
                confirm("Każde pole formularza musi zostać wypełnione!");
}
});

    $("#wyslij").click(function() {
        
            var mail = /\S+@\S+\.\S+/;
            if (!mail.test($("#mail").val())) {
                alert("Adres e-mail jedt błędnie wpisany!");
                $("#mail").css('outline-color', 'red');
    }
});
//==================================================================================================

    $("#ofirmie").click(function() {
        $("#content").load("o_firmie.html");
    });

    $("#pracownicy").click(function() {
        $("#content").load("pracownicy.html");
    });
    
    $("#inwestycje").click(function() {
        $("#content").load("inwestycje.html");
    });
    
    $("#oferty").click(function() {
        $("#content").load("oferty_pracy.html");
    });
    
//==================================================================================================
    
 $('img.photo').fadeIn();
    $('#poprzednie').click(function() {
        var current = $('img.photo');
        if (current.prev('img').length == 1) 
        {            
            var prev = current.prev('img');
        } 
        else 
        {
            var prev = current.siblings('img').last();
        }
        current.hide().removeClass('photo');
        prev.fadeIn().addClass('pht');
    });


    $('#nastepne').click(function() {
        var current = $('img.photo');
        if (current.next('img').length == 1) 
        {    
            var next = current.next('img');
        } 
        else 
        {
            var next = current.siblings('img').first();
        }
        current.hide().removeClass('photo');
        next.fadeIn().addClass('photo');
    });

    
    
