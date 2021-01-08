
pconnections = [
    [10,8,  8,  6,  4,  3,  0,  2,  2,  3,  2,  1,  4,  1,  1,  3,  9,  5,  4,  0,  9],
    [6,10,  6,  5,  4,  2,  3,  1,  1,  3,  1,  0,  3,  0,  2,  2,  8,  7,  1,  0,  9],
    [8,7,   10, 7,  8,  6,  9,  5,  5,  4,  2,  3,  5,  6,  8,  10, 7,  3,  5,  8,  2],
    [7, 5,  7,  10, 7,  7,  6,  5,  6,  5,  5,  8,  6,  6,  9,  7,  6,  5,  5,  7,  5],
    [2,2,   8,  4,  10, 10, 8,  4,  8,  8,  3,  4,  2,  2,  5,  4,  8,  4,  3,  2,  0],
    [1, 1,  7,  5,  10, 10, 5,  6,  8,  3,  1,  1,  1,  1,  7,  2,  2,  1,  2,  1,  1],
    [1, 1,  9,  2,  5,  9,  10, 1,  10, 9,  1,  1,  1,  1,  5,  5,  10, 1,  1,  1,  1],
    [2, 1,  6,  5,  5,  8,  5,  10, 5,  5,  5,  5,  7,  9,  8,  2,  2,  8,  9,  1,  9],
    [7, 4,  7,  7,  10, 10, 10, 5,  10, 9,  6,  9,  3,  3,  2,  7,  10, 2,  2,  4,  3],
    [7, 5,  8,  7,  10, 7,  8,  4,  9,  10, 10, 8,  7,  2,  10, 7,  10, 1,  1,  6,  2],
    [3, 7,  2,  1,  5,  5,  1,  6,  3,  10, 10, 9,  7,  2,  7,  1,  4,  0,  3,  9,  1],
    [2, 1,  2,  7,  1,  3,  1,  2,  2,  3,  8,  10, 1,  4,  6,  4,  5,  0,  4,  7,  0],
    [2, 0,  2,  3,  2,  4,  5,  7,  4,  4,  4,  10, 7,  5,  3,  3,  8,  2,  8,  2,  8],
    [2, 0,  2,  3,  2,  4,  5,  7,  4,  4,  4,  10, 7,  5,  3,  3,  8,  2,  8,  2,  8],
    [5, 4,  6,  6,  6,  8,  6,  6,  6,  6,  5,  8,  4,  8,  10, 6,  6,  5,  5,  4,  4],
    [8, 7,  9,  6,  6,  4,  7,  3,  6,  3,  2,  4,  4,  5,  5,  3,  2,  7,  3,  8,  2],
    [6, 6,  5,  6,  8,  5,  10, 2,  10, 10, 7,  5,  3,  4,  6,  6,  10, 3,  1,  7,  0],
    [2, 1,  2,  7,  1,  3,  1,  2,  2,  3,  8,  10, 1,  4,  6,  4,  5,  0,  4,  7,  0],
    [1, 1,  3,  2,  2,  3,  1,  9,  1,  2,  3,  2,  8,  9,  3,  2,  1,  1,  10, 1,  6],
    [10,10, 8,  9,  6,  2,  2,  3,  6,  5,  7,  8,  3,  2,  6,  10, 7,  2,  1,  0,  2],
    [2, 2,  5,  5,  6,  6,  4,  9,  5,  5,  5,  4,  9,  9,  8,  6,  4,  8,  9,  2,  10]

]
people = [];
arr = [1]


var point_rad = 50;
var border = point_rad*0.5;
var offset_val = 0;
var rheight = innerHeight*(.5);
var rwidth = innerWidth-150;

function setup(){
    createCanvas(rwidth,rheight);
    background(200);
    noStroke();
    for(i=0;i < pconnections.length; i++){
        connections = [];
        if(pconnections[i].length == 0){
            for(j=0;j < pconnections.length; j++){
                connections.push(arr[floor(Math.random()*arr.length)])
            }    
        } else {
            for(j=0;j < pconnections.length; j++){
                connections.push(pconnections[i][j]);
            }
        }
        people.push(new Person(connections));
    }
}

function draw(){
    background(175);
    for(i=0;i < people.length; i++){
        people[i].update();
        people[i].show();
    }

    for(i=0;i < people.length; i++){
        people[i].pos.add(people[i].dir);
        if (people[i].pos.x < 0 + border){
            people[i].pos.x = 0 + border;
        } + border
        if (people[i].pos.y < 0 + border){
            people[i].pos.y = 0 + border;
        }
        if (people[i].pos.y > rheight - border){
            people[i].pos.y = rheight - border;
        }
        if (people[i].pos.x > rwidth - border){
            people[i].pos.x = rwidth - border;
        }
    }
}


function Person(connections){
    this.connections = connections;
    this.pos = createVector(Math.floor(Math.random()*rwidth), Math.floor(Math.random()*rheight));
    this.color = randomColor();

    this.dir = createVector(this.pos.x,this.pos.y);
    this.show = function(){
        noStroke();
        fill(this.color);
        ellipse(this.pos.x,this.pos.y,point_rad);
    }

    this.connect = function(endindex){
                strokeWeight(5);
                var endx = people[endindex].pos.x;
                var endy = people[endindex].pos.y;
                line(this.pos.x,this.pos.y,endx,endy);
                people[endindex].show();
    }

    this.update = function(){
        
        for(var t=0; t < this.connections.length; t++){
            var convec = createVector(people[t].pos.x-this.pos.x,people[t].pos.y-this.pos.y)
            convec.setMag(this.connections[t] + offset_val)
            this.dir.add(convec);

            if(document.getElementById('mutural-max').checked){
                if(connections[t] == Math.max(...this.connections) && people[t].connections[i] == Math.max(...people[t].connections)){
                    stroke(250);               
                    this.connect(t);
                }
            } 
            if(document.getElementById('max').checked){
                if(connections[t] == Math.max(...this.connections)){
                    stroke(200);
                    this.connect(t);
                }
            }
            if(document.getElementById('mutural-min').checked){
                if(connections[t] == Math.min(...this.connections) && people[t].connections[i] == Math.min(...people[t].connections)){
                    stroke(150);
                    this.connect(t);
                }
            } 
            if(document.getElementById('min').checked){
                if(connections[t] == Math.min(...this.connections)){
                    stroke(50);
                    this.connect(t);
                }
            } 
            if(document.getElementById('all').checked){
                    stroke(0);
                    this.connect(t);
            } 
        }
        this.dir.limit(document.getElementById('per-slider').value/10);
        this.show();
    }
}



console.log(people)