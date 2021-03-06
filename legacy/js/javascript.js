function addIndex(div) {
        
    $(".title").each(function(i, obj) {
            
        var anchor = $("<a></a>");
        var name = $("<p></p>");
        name.html(obj[i].html());
        div.add(name);
    }); 
}

$(document).ready(function() {
    var sidebar_visible = false;
    var sidebar_width = $("#sidebar").outerWidth();
    $("#sidebar").css({"left" : -sidebar_width});
    
   $("#slidehandle").click(function() {
       if (sidebar_visible == true) {
           sidebar_visible = false;
           $("#sidebar").animate({"left" : -sidebar_width}) ;
           $("#slidehandle").animate({"left" : "0"}) ;
       } else {
           sidebar_visible = true;
           $("#sidebar").animate({"left" : "0"}) ;
           $("#slidehandle").animate({"left" : sidebar_width}) ;
       }
   });
    $(".minimize").click(function() {
        var m = $(this);
        var p = $(this).parent();
        var x = false;
        
        if ($(m).hasClass("minimized")) {
            
            if (x == false) {
            
                x = true;
                $(m).removeClass("minimized");
                $(p).children("h2").animate({"margin-top" : "10px"});
                $(p).animate({height : "auto", "padding-bottom" : "40px"});
                $(m).parent().children().not(m).not(".title").show();
                
            }
            
        } else if (!$(m).hasClass("minimized")) {
            
            if (x == false) {
                
                x = true;
                $(m).addClass("minimized");
                $(p).children("h2").animate({"margin-top" : "0"});
                $(p).animate({height : "auto", "padding-bottom" : "10px"});
                $(this).parent().children().not(m).not(".title").hide();
                
            }
            
        }  
    });
    
    //replaces container contents with new file
    $(document).on("click", '.replacecontent', function () {
        replaceContent($(this).attr("data-target"));
        console.log($(this).attr("data-target"));
    });
    
    //back to top button when scrolling
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $("#totop").css({top : '0'});
        } else {
            $("#totop").css({top : '-200px'});
        }
    });
    //back to top button click
    $("#topbutton").click(function () {
        $(window).scrollTop(0);
    });
    $("#settingsbutton").click(function () {
       $("#settings").toggle();
    });
    
    //width slider
    var widthslider = document.getElementById("widthslider");
    widthslider.oninput = function () {
        var width = widthslider.value;
        $("#contentwidth").html(width);
        $(".entry").width(width + "%");
    };
    
    
});




