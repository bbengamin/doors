function centerPopUp(){
    var left = ($(window).width() - $(".pop-up-inner").width()) / 2;
    var top = ($(window).height() - $(".pop-up-inner").height()) / 2;
    $(".pop-up-inner").css({"margin-left": left, "margin-top": top});
}

$(".show-pop-up").on("click", function(e){
    e.preventDefault();
    $(".pop-up").fadeIn(700);
    centerPopUp();
});

$(".close-pop-up, .overlay").on("click", function(){
    $(".pop-up").fadeOut(700);
    centerPopUp();
});

function getChar(e) {
    if (e.which == null) {
        if (e.keyCode < 32) return null;
        return String.fromCharCode(e.keyCode);
    }
    if (e.which != 0 && e.charCode != 0) {
        if (e.which < 32) return null;
        return String.fromCharCode(e.which);
    }
    return null;
}

$('.cart-count input, #filter-price-min, #filter-price-max').on("keypress", function(e) {
    console.log("pressed");
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
});

$(".drawing-up-form input[type='radio']").on("change", function(){
    var tgt = $(this).attr("data-target-ta");
    $(".cr").removeAttr("required");
    if ($(tgt).hasClass("wcr")) {
        $(tgt).find(".cr").attr("required", "required");
    }
    var n = $(".ta.opened").length;
    if(n) {
        $(this).closest("fieldset").find(".ta.opened").slideUp(500, function () {
            $(this).removeClass("opened");
            $(tgt).slideDown(500, function () {
                $(this).addClass("opened");
            });
        });
        $(this).addClass("checked");
    }
    else {$(tgt).slideDown(500, function () {
        $(this).addClass("opened");
    });
    }
});

$(".show-textarea").on("click", function(e){
    e.preventDefault();
    $(this).closest("fieldset").find(".textarea-wrapper").slideDown(700);
});

$(".measurement-and-search .search").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).closest(".measurement-and-search").find(".header-search-form").css("display", "block").find("input[type='text']").show('slide', {direction: 'right'}, 500);
});

$(".header-search-form").on("click", function(e){
    e.stopPropagation();
});

function hideButton(){
    $(".header-search-form").css("display", "none");
}

$("body").on("click", function() {
    $(".header-search-form input[type='text']").hide('slide', {direction: 'right'}, 500);
    setTimeout(hideButton, 400);
});

$(window).on("resize", centerPopUp);

jQuery(document).ready(function() {
    $("#call-form").validate({
        rules: {
            callUserphone: {
                requiredphone: true,
                minlenghtphone: true
            }

        }
    });
    $("#drawing-up-form").validate({
        rules: {
            drawUpUserphone: {
                requiredphone: true,
                minlenghtphone: true
            },
            drawUpMail: {
                required: true,
                email: true
            }

        }
    });
    $("input.input-phone").mask("+7(999)999-99-99");

    $(".order-list-wrapper").mCustomScrollbar();

    $("select, input[type='radio'], input[type='checkbox']").styler();
});