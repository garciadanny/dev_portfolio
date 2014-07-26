$(document).ready( function() {

    $(".project-intro").on("click", function(event) {
        event.preventDefault();
        $(".projects").find(".project-intro").hide();
        $(this).closest(".project").find(".project-description").fadeToggle();
    });

    $(".back").on("click", function(event) {
        event.preventDefault();
        $(this).closest(".project-description").hide();
        $(".projects").find(".project-intro").fadeToggle();
    });

});
