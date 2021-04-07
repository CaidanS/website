let spacer = 10;
let grid_dims = {rows:100, cols:100};

// neighbor_points relative to active points in the form [x_offset, y_offset]
let neighbor_points = [
    [-1, 1],    [0, 1],     [1, 1],
    [-1, 0],    [0, 0],      [1, 0], 
    [-1, -1],   [0, -1],    [1, -1]
];

const mouse_weight = 0.0;

const neighbor_offset_for_activation = (neighbor_points.length + mouse_weight)/2


let grid = new Array(grid_dims.rows * grid_dims.cols).fill(0)

let new_grid = new Array(grid_dims.rows * grid_dims.cols).fill(0)

let flip = 0;
let offset = 1;

function setup() {
    let renderer = createCanvas(500, 500);
    renderer.parent("canvas_container");
    spacer = 5;
    for (var i = 0; i < grid.length; i++) {
        grid[i] = Math.random();
        new_grid[i] = grid[i];
    }
    noStroke();
    colorMode(HSL);
    // noLoop();
    // frameRate(1);
}

function draw() {
    if (flip % offset == 0){
        background(255); 
    }

    for (let i = 0; i < grid.length; i += 1) {
        // new_grid[i].value = 0;

        x_point = (i % grid_dims.cols)
        y_point = floor(i/grid_dims.rows)        
        let sum = 0;  

        for (j = 0; j < neighbor_points.length; j += 1) {            
            let x_neighbor = x_point + neighbor_points[j][0];
            let y_neighbor = y_point + neighbor_points[j][1];                                    
            if (0 == (x_neighbor >= 0 && y_neighbor >= 0 && x_neighbor < grid_dims.cols && y_neighbor < grid_dims.rows)){
               if (x_neighbor < 0){
                x_neighbor = grid_dims.cols;
               }
               if (y_neighbor < 0){
                y_neighbor = grid_dims.rows;
               }
               if (x_neighbor >= grid_dims.cols){
                x_neighbor = 0;
               }
               if (y_neighbor >= grid_dims.rows){
                y_neighbor = 0;
               }
            }              
            sum += grid[x_neighbor + y_neighbor * grid_dims.cols];
        }

        // mouse_off = (mouseY / innerHeight) * mouse_weight;
        s_sig = sum;
        
        // sigmoid
        new_grid[i] = parseFloat(1/(Math.exp(-s_sig+neighbor_offset_for_activation)+1).toFixed(3));
        
        // tanh
        // new_grid[i] = parseFloat((Math.tanh(s_sig-neighbor_offset_for_activation)+1).toFixed(3))/2;

        // average
        // new_grid[i] = sum/(neighbor_points.length);

        // new_grid[i] = sum
        fill(((new_grid[i] * 360)/4) + 240, 87, (sum/8) * 25 + 50);
        // fill(51);
        if (flip % offset == 0){
            rect(x_point * spacer, y_point * spacer + spacer, spacer , spacer);           
        }
        
        // text(new_grid[i], x_point * spacer, y_point * spacer + spacer);
        // if (grid[i].value > 0){
        //     text(grid[i].value, x_point * spacer, y_point * spacer);
        //     point( x_point * spacer, y_point * spacer)
        // }
    }


    flip += 1;
    
    for (let i = 0; i < grid.length; i += 1) {
        grid[i] = new_grid[i];
    }
    // console.log(grid)
}