$(".accordion-item .heading").on("click", function (e) {
    e.preventDefault();

    if ($(this).closest(".accordion-item").hasClass("active")) {
        $(".accordion-item").removeClass("active");
    } else {
        $(".accordion-item").removeClass("active");

        $(this).closest(".accordion-item").addClass("active");
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $(".accordion-item .content").not($content).slideUp("fast");
});
