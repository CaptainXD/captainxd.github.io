function randomize(data) {
    var index;
    for(var i = 0; i < 12; i++) {
        index = Math.floor(Math.random() * data.tag.length);
        console.log(index);
        tagArray.push(data.tag[index]);
        data.tag.splice(index, 1);
        console.log(tagArray[i]);
    }
}