var ladybug = document.getElementById('img');

var usLeft = 0;
var usTop = 0;
//var usRight = 0;
//var usBottom = 0;
const step = 10;

document.onkeydown = function (event){
    console.log(event);
    console.log(ladybug.style);
    // ViewModel
    // X coordinate
    var modelUpdated1 = false;
    if(event.key == 'ArrowRight') {
        usLeft += step;
        modelUpdated = true;
    } else if(event.key == 'ArrowLeft') {
        usLeft -= step;
        modelUpdated = true;
    } else if(event.key == 'ArrowDown') {
        // Y coordinate
        usTop += step;
        modelUpdated = true;
    } else if(event.key == 'ArrowUp') {
        usTop -= step;
        modelUpdated = true;
    }
    // View
    if (modelUpdated == true) {
        ladybug.style.left =  usLeft + 'px';
        ladybug.style.top = usTop + 'px';
    }
}