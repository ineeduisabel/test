$(function() {
    $('div.circle').mouseover(function() {
        $('div.outer-circle').addClass('hover');
        $('div.middle-circle').addClass('hover');
    });
    $('div.circle').mouseout(function() {
        $('div.outer-circle').removeClass('hover');
        $('div.middle-circle').removeClass('hover');
    });
});