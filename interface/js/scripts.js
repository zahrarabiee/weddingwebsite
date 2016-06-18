// jcarousel
$(function() {
    $('.jcarousel').jcarousel({}).jcarouselAutoscroll({
        interval: 5000,
        target: '+=1',
        autostart: true
    });
});
(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');
        jcarousel.jcarousel({
            wrap: 'circular'
        });
        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });
        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });
    });
})(jQuery);
$(document).ready(function() {
    $(".jcarousel ul li").height($(".jcarousel ul li").width());
});
// tab navigation
$(function() {
    $('.btn-next').click(function() {
        $('.nav-tabs > .active').next('li').find('a').trigger('click');
    });
    $('.btn-previous').click(function() {
        $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    });
});
// add submenu arrow icon
$(function() {
    $(".nav-custom ul li:has(ul)").append("<i class='fa fa-angle-down visible-xs visible-sm'></i><i class='fa fa-angle-left visible-md visible-lg'></i>");
    $(".nav-custom ul li .fa-angle-down").click(function() {
        $(this).parent().toggleClass("active");
    });
    $(".nav-custom .nav-custom-toggle").click(function() {
        $(".nav-custom > ul").slideToggle();
    });
    $('[data-toggle=tooltip]').tooltip()
});
// thumb list
$(function() {
    $(".thumb-list img").click(function() {
        var src = $(this).attr("src");
        var large = $(this).data("large");
        $("#zoomblock>img").attr("src", src);
        $("#zoomblock .he-zoom>img").attr("src", large);
    });
});
$(function() {
    $(".btn-active-list").click(function() {
        $(".list-tour-home > li").removeClass("col-xs-6 col-sm-6 col-md-4");
        $(".list-tour-home").removeClass("list-tour-home-grid");
        $(".list-tour-home").addClass("list-tour-home-list tour-list");
        $(".btn-active-grid").removeClass("active");
        $(this).addClass("active");
    });
    $(".btn-active-grid").click(function() {
        $(".list-tour-home > li").addClass("col-xs-6 col-sm-6 col-md-4");
        $(".list-tour-home").removeClass("list-tour-home-list tour-list");
        $(".list-tour-home").toggleClass("list-tour-home-grid");
        $(".btn-active-list").removeClass("active");
        $(this).addClass("active");
    });
});

$(function () {

    $('.up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        //$('.up').animate({ "opacity": "0" }, 600);
        return false;
    });
});