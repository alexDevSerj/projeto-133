var status = "";
img = "";
var object = [];

function preload(){
  img = loadImage('sala.jpg');
}

function setup(){
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Detectando Objetos";
}

function modelLoaded(){
  console.log("modelo carregado")
  status = true
  objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
  object = results
  if(error){
    console.error(error)
  }
  else{
    console.log(results)
  }
}

function draw(){
  image(img,0,140,700,420)

  if(status != ""){
    for(var i =0; i<object.length ; i++){

      fill("#ff0000");
      percent = floor(object[i].confidence*100)
      text(object[i].label+" "+percent+"%",object[i].x,object[i].y)
      noFill()
      stroke("#ff0000")
      rect(object[i].x,object[i].y,object[i].width,object[i].height)

      text(object[i].label)
      text(object[i].confidence)
      text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
      object[i].width
      object[i].height
    }
  }
}