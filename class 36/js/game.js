class Game{
    constructor(){

    }

    getState(){
        var gameStateref = Database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val()
        });
    }
    update(state){
        Database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player = new Player();
             player.getCount();
             form = new Form();
             form.display();
        }
    }
}