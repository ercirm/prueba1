//var imagenes
var caja;

var fondo;

var mariposas;
var mlSonido;

var bailarina;
var lcSonido;

var girasol;
var faSonido;

var oso;
var toSonido;

var peter;
var ppSonido;

var x;
var y;
var vely;

var botonImagen;
var boton = 0;
var botonSonido;

function preload(){
  caja = loadImage("caja.png");
  
  fondo = loadImage("fondo.png");
  
  mariposas = loadImage("mariposas.png");
    mlSonido = loadSound("ml.mp3");
  
  bailarina = loadImage("bailarina.png");
    lcSonido = loadSound("lc.mp3");
  
  girasol = loadImage("girasol.png");
    faSonido = loadSound("fa.mp3");
  
  oso = loadImage("oso.png");
    toSonido = loadSound("to.mp3");
  
  peter = loadImage("peter.png");
    ppSonido = loadSound("pp.mp3");
}

function setup() {
createCanvas(900, 600);

  x = width/2;
  y = height/2+50;
  vely = 2;
}

function draw() {
background(220);
  
    imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  
  if(botonSonido == "sonido1"){ }

  //ABRE BAILARINA
imageMode(CENTER);
  if(botonImagen == "bailarina"){
  image(bailarina,x,y,110,170);
}
  //CIERRA BAILARINA
  
  if(botonSonido == "sonido2"){ }

  //ABRE MARIPOSA
imageMode(CENTER);
  if(botonImagen == "mariposas"){
  image(mariposas,x,y,110,150);
}
  //CIERRA MARIPOSA
  
  if(botonSonido == "sonido3"){ }
  
 //ABRE GIRASOL
imageMode(CENTER);
  if(botonImagen == "girasol"){
  image(girasol,x,y,110,150);
}
  //CIERRA GIRASOL
  
  if(botonSonido == "sonido4"){ }
  
    //ABRE OSO
imageMode(CENTER);
  if(botonImagen == "oso"){
  image(oso,x,y,110,140);
}
  //CIERRA OSO
  
  if(botonSonido == "sonido5"){ }
  
   //ABRE PETER
imageMode(CENTER);
  if(botonImagen == "peter"){
  image(peter,x,y,110,150);
}
  //CIERRA PETER
  

if(boton == 1){
y-=vely;
}

if(boton == 0){
y+=vely;
}

 if(y <= 100){
y = 100;
}
if(y >= height/2){
y = height/2;
}
  
  //ABRE CAJA
imageMode(CENTER);
  image(caja,width/2,height/2+50,360,250);
  console.log(botonImagen);
  //CIERRA CAJA

}

function keyTyped(){
  
//CONTROL DE MOVIMIENTOS 
if(key == 'q'){
boton = 1;
}
if(key == 'w'){
boton = 0;
}
  
  
// CONTROL DE IMAGENES
  if(key == 'b'){
botonImagen = "bailarina";
  if(lcSonido.isPlaying()){
}else{
  lcSonido.play();
}
}
  
  if(key == 'm'){
botonImagen = "mariposas";
  if(mlSonido.isPlaying()){
}else{
  mlSonido.play();
}
}

  if(key == 'g'){
botonImagen = "girasol";
  if(faSonido.isPlaying()){
}else{
  faSonido.play();
}
}
  
  if(key == 'o'){
botonImagen = "oso"
  if(toSonido.isPlaying()){
}else{
  toSonido.play(); 
    }
}
  
  if(key == 'p'){
botonImagen = "peter"
  if(ppSonido.isPlaying()){
}else{
  ppSonido.play(); 
    }
}
  
  //CONTROL DE CANCIÓN
 
  //CANCIÓN BAILARINA
  if(key == 's'){
  if(lcSonido.isPlaying()){
lcSonido.stop();
  }else{
  }
  
   //CANCIÓN MARIPOSAS
  if(mlSonido.isPlaying()){
mlSonido.stop();
  }else{
  }
    
   //CANCIÓN GIRASOL
  if(faSonido.isPlaying()){
faSonido.stop();
  }else{
  }
    
  //CANCIÓN OSO
  if(toSonido.isPlaying()){
toSonido.stop(); 
  }else{
  }
    
  //CANCIÓN PETER
  if(ppSonido.isPlaying()){
ppSonido.stop();
  }else{
}   
}
}
