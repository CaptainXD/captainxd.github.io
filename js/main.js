$(document).ready(function() {
    $.getJSON('../data.json', function(data) {
        loadJSON(data);
    });
});