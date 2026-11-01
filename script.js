// Wait until the document is ready
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

   
});