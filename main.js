var drawings=["Hand","Flower","Car","Sun","House","Dog","Bicycle","Apple","Clock","Shirt"];
var random = Math.floor((Math.random()*10));
var drw=0
console.log(drw);

window.addEventListener("load", function(){
    timer();
    setInterval(function(){document.body.scrollTop=0},1)
    random = Math.floor((Math.random()*10));
    drw=drawings[random];
    document.getElementById("given").innerHTML=drw;})

function update(){
  updateCanvas()
    drw=drawings[random];
    console.log(random);
    setInterval(function(){document.body.scrollTop=0},1)
    random = Math.floor((Math.random()*10));
    drw=drawings[random]
    while(drw==document.getElementById("given").innerHTML){
        random = Math.floor((Math.random()*10));
        drw=drawings[random]   
    }
    document.getElementById("given").innerHTML=drw;
    
 
}



x=5
function timer(){
    if(x<0){update();x=5}
setTimeout(time, 1000);}


function time() {

  document.getElementById("time").innerHTML=x
  x=x-1
  timer()
}

function setup(){
canvas=createCanvas(1100,650);
canvas.position(320,55)
background("white");
}
function updateCanvas(){

    background("white");



}
function draw(){
    check()
}
function check(){
    if(sketch==drw){
        
    }
}