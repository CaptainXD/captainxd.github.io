var tagArray = [];
var dupArray = [];
var flipped;


$(document).ready(function() {
    $.getJSON('../data.json', function(data) {
        init(data);
        window.setInterval(checkFlip, 2500);
    });
});

function init(data) {
    randomize(data);
    dupArray = tagArray.slice(0);
    $('#main').flip({trigger: 'manual'});
    $('.front p').html(
        '<a href="javascript:void(0)">' + dupArray.pop().title + '.</a>'
    );
    $('.back p').html(
        '<a href="javascript:void(0)">' + dupArray.pop().title + '.</a>'
    );
    flipped = false;
}

function checkFlip() {
    var popVal = dupArray.pop();
    if(typeof popVal !== 'undefined') {
        flipTag(popVal);
    } else {
        dupArray = tagArray.slice(0);
        popVal = dupArray.pop();
        flipTag(popVal);
    }
}

function flipTag(popVal) {
    if(flipped) {
        $('#main').flip(false);
        $("#main").on('flip:done', function() {
            $('.back p').html(
                '<a href="javascript:void(0)">' + popVal.title + '.</a>');
        });
        flipped = false;
    } else {
        $('#main').flip(true);
        $("#main").on('flip:done', function() {
            $('.front p').html(
                '<a href="javascript:void(0)">' + popVal.title + '.</a>');
        });
        flipped = true;
    }
}