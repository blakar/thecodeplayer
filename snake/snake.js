
$(document).ready(function () {
    // initialize canvas
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext("2d");
    var w = $('#canvas').width();
    var h = $('#canvas').height();

    // let's paint the canvas
    ctx.fillStyle = 'yellow'; // 'white';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);

    // let's create the snake now
    var snake_array; // an array of cells to make up the snake

    function create_snake() {
        var length = 5; // length of the snake
        snake_array = []; // empty array to start with

        for (var i = length - 1; i >= 0; i--) {
            // this will create a horizontal snake starting from the top left
            snake.array.push({ x: i, y: 0 });
        }
    }
});