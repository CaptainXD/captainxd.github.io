var tagArray = [];
var dupArray = [];
var flipped;

$(document).ready(function() {
    $.getJSON('../data.json', function(data) {
        init(data);
        setInterval(flipTag, 3000);
    });
});

function init(data) {
    randomize(data);
    dupArray = tagArray.slice();
    $('.front p').html(
        '<a href="javascript:void(0)">' + dupArray.pop().title + '.</a>'
    );
    flipped = false;
}

function flipTag() {
    if(dupArray.length === 0) {
        dupArray = tagArray.slice();
    }
    if(flipped) {
        $('#main').flip();
        $('.back p').html(
            '<a href="javascript:void(0)">' + dupArray.pop().title + '.</a>'
        );
        flipped = false;
    } else {
        $('#main').flip();
        $('.front p').html(
            '<a href="javascript:void(0)">' + dupArray.pop().title + '.</a>'
        );
        flipped = true;
    }
}