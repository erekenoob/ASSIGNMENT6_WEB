$(document).ready(function() {
    console.log("jQuery is ready!");

    //change text html CSS
    $("#btn-text").click(function() {
        $("#text-id").text("Text was changed using .text() method!");
    });

    $("#btn-html").click(function() {
        $(".text-class").html("<b>Bold HTML</b> and <i>Italic HTML</i> added with .html()!");
    });

    $("#btn-css").click(function() {
        $("h4").css({
            "color": "white",
            "background-color": "#e67e22",
            "padding": "10px",
            "border-radius": "4px"
        });
    });

    //hide show toggle
    $("#btn-hide").click(function() {
        $("#vis-text").hide();
    });

    $("#btn-show").click(function() {
        $("#vis-text").show();
    });

    $("#btn-toggle").click(function() {
        $("#vis-text").toggle();
    });

    //fade out fade in fade togggle
    $("#btn-fadeout").click(function() {
        $("#fade-img").fadeOut(500);
    });

    $("#btn-fadein").click(function() {
        $("#fade-img").fadeIn(500);
    });

    $("#btn-fadetoggle").click(function() {
        $("#fade-img").fadeToggle(500);
    });

    //slide up down toggle
    $("#btn-slideup").click(function() {
        $("#slide-panel").slideUp(400);
    });

    $("#btn-slidedown").click(function() {
        $("#slide-panel").slideDown(400);
    });

    $("#btn-slidetoggle").click(function() {
        $("#slide-panel").slideToggle(400);
    });

    // dom
    //append preppend remove
    $("#btn-append").click(function() {
        $("#item-list").append("<li>New Item (End)</li>");
    });

    $("#btn-prepend").click(function() {
        $("#item-list").prepend("<li>New Item (Start)</li>");
    });

    $("#btn-remove").click(function() {
        $("#item-list li:last").remove();
    });

    //change src and href
    $("#btn-change-img").click(function() {
        $("#attr-img").attr("src", "photo/Снимок экрана 2026-11-01 163003.png");
    });

    $("#btn-change-link").click(function() {
        $("#attr-link").attr("href", "https://www.instagram.com/ereke_qwt/");
        $("#attr-link").text("Go to my Instagram acc");
    });

    //live translation .val and .text
    $("#input-name").on("keyup", function() {
        var nameValue = $(this).val();
        $("#out-name").text(nameValue);
    });

    $("#input-email").on("keyup", function() {
        var emailValue = $(this).val();
        $("#out-email").text(emailValue);
    });

    //animation
    //.animate function 
    $("#btn-anim-basic").click(function() {
        $("#box1").animate({
            left: "150px",
            width: "110px",
            height: "110px"
        }, 600);
    });

    $("#btn-reset1").click(function() {
        $("#box1").animate({ left: "0px", width: "70px", height: "70px" }, 400);
    });

    //.animate stap by ste
    $("#btn-anim-seq").click(function() {
        $("#box2")
            .animate({ left: "150px" }, 500) //right
            .animate({ top: "70px" }, 500) //down
            .animate({ width: "40px", height: "40px" }, 500) //shrink
            .animate({ left: "0px", top: "0px", width: "70px", height: "70px" }, 500); //return
    });

    //combo
    $("#btn-anim-comb").click(function() {
        $("#box3").animate({
            left: "180px",
            opacity: 0.4,
            width: "120px",
            height: "120px"
        }, 800);
    });

    $("#btn-reset3").click(function() {
        $("#box3").animate({ left: "0px", opacity: 1, width: "70px", height: "70px" }, 400);
    });

    //image gallery
    //fade out change src fade in and enlarge
    $(".thumb").click(function() {
        var newSrc = $(this).attr("src"); //take a link of picture

        //hide main picture and paste a picture which i click
        $("#main-image").fadeOut(250, function() {
            $("#main-image").attr("src", newSrc);
            $("#main-image").fadeIn(250);
        });
    });

    //change a size of picture
    $("#btn-enlarge").click(function() {
        $("#main-image").animate({
            width: "500px",
            height: "330px"
        }, 500);
    });

    $("#btn-normal").click(function() {
        $("#main-image").animate({
            width: "350px",
            height: "230px"
        }, 500);
    });

});