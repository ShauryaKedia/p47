class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.score = 0;
        this.distanceX = 0
        this.distanceY = 0
        this.rank = 0
    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        database.ref('players').on("value", function(data) {
            allPlayers = data.val()
        })
    }

    updatePlayerInfo(){
        var playerIndex = 'players/player'+this.index;
        database.ref(playerIndex).update({
            name:this.name,
            score:this.score,
            distanceX:this.distanceX,
            distanceY:this.distanceY
        })
    }

    static getWallInfo(){
        database.ref('wall').on("value", function(data){
            var pos = data.val()
            wallX = pos.x;
            wallY = pos.y;
        })
    }

    static updateWallInfo(x,y){
        database.ref('wall').update({
            x:x,
            y:y
        })
    }

     getRank(){
        database.ref('playersFinished').on("value", function(data){
            this.rank = data.val()
            
        })
    }

     updateRank(rank){
        database.ref('/').update({
            playersFinished:rank
        })
    }
}