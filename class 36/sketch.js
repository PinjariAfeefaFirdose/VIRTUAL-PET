var canvas,bgImage;
var gameState = 0;
var playerCount;
var Database;
var form,player,game;

function setup(){
  canvas = createCanvas(400,400);
  Database = firebase.database()
  game = new Game();
   game.getState();
    game.start();
}
function draw(){

}