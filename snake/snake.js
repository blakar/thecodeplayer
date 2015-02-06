
$(document).ready(function () {
    // initialize canvas
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext("2d");
    var w = $('#canvas').width();
    var h = $('#canvas').height();

    // let's save the cell width in a variable for easy control
    var cw = 10;
    var d = 'right'; // default direction

    // let's paint the canvas
    ctx.fillStyle = 'yellow'; // 'white';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);

    // let's create the snake now
    var snake_array; // an array of cells to make up the snake

    create_snake();

    function create_snake() {
        var length = 5; // length of the snake
        snake_array = []; // empty array to start with

        for (var i = length - 1; i >= 0; i--) {
            // this will create a horizontal snake starting from the top left
            snake_array.push({ x: i, y: 0 });
        }
    }

    // let's paint the snake name
    function paint() {

        // to avoid the snake trail we need to paint 
        // background on every frame
        ctx.fillStyle = 'yellow';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);

        // the movement code for the snake to come here
        // the logic is simple: pop out the tail cell and
        // place it in front of the head cell
        var nx = snake_array[0].x;
        var ny = snake_array[0].y;
        // these were the position of the head cell. We will
        // increment it to get the new head position

        // let's add proper direction based movement now
        if (d == 'right') nx++;
        else if (d == 'left') nx--;
        else if (d == 'up') ny--;
        else if (d == 'down') ny++;

        var tail = snake_array.pop(); // pops out the last cell
        tail.x = nx; tail.y = ny;
        snake_array.unshift(tail); // puts back the tail as the first cell

        for (var i = 0; i < snake_array.length; i++) {
            var c = snake_array[i];

            // let's paint 10px wide cells
            ctx.fillStyle = 'blue';
            ctx.fillRect(c.x * cw, c.y * cw, cw, cw);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(c.x * cw, c.y * cw, cw, cw);
        }
    }

    // let's add the keyboard controls now
    $(document).keydown(function (e) {
        var key = e.which;
        // we will add another clause to prevent reverse gear
        if (key == '37' && d != 'right') d = 'left';
        else if (key == '38' && d != 'down') d = 'up';
        else if (key == '39' && d != 'left') d = 'right';
        else if (key == '40' && d != 'up') d = 'down';
        // the snake is now keyboard controllable
    });

    // let's move the snake now using a timer which will
    // trigger the paint function every 60 ms
    game_loop = setInterval(paint, 60);

});