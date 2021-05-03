class Player { 
    constructor(){}
     getCount(){ var playerCountRef = Database.ref('playerCount'); playerCountRef.on("value",function(data){ playerCount = data.val(); }) }
      updateCount(count){ Database.ref('/').update({ playerCount: count }); } update(name){ var playerIndex = "player" + playerCount; Database.ref(playerIndex).set({ name:name }); } }