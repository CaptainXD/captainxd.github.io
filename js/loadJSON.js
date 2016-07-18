function randomize(data) {
    var index;
    for(var i = 0; i < data.tag.length; i) {
        index = Math.floor(Math.random() * data.tag.length);
        tagArray.push(data.tag[index]);
        data.tag.splice(index, 1);
    }
}