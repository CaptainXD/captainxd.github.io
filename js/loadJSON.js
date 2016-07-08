function loadJSON(data) {
    var index1 = Math.floor(Math.random() * data.bio.length);
    var index2 = Math.floor(Math.random() * data.bio.length);
    
    while(index1 == index2) {
        index2 = Math.floor(Math.random() * data.bio.length);
    }
    
    $('#main p').html(
        '<a href="javascript:void(0)">' +
        data.bio[index1].title + 
        '.</a> '
    );
    $('#main p').append(
        '<a href="javascript:void(0)">' +
        data.bio[index2].title + 
        '.</a>'
    );
}