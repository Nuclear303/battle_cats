class Cat{
    constructor(nazwa, base_health, base_damage,effect){
        this.nazwa = nazwa
        this.level = 1 
        this.damageCalc = _=>{
            if(this.level==1){
                this.damage = base_damage
            }
            else{
                this.damage = Math.ceil(base_damage*Math.log(this.level))+1
            }
        }
        this.health = base_health+(this.level*10)
        this.effect = effect
    }
}
class Player{
    constructor(nazwa){
        this.nazwa=nazwa;
    }
}
const mainMenu = document.querySelector("audio")
document.querySelector("input").addEventListener("click",_=>{
    switch(document.querySelector("input").value){
        case "Unmute":{
            mainMenu.play();
            mainMenu.loop = true
            document.querySelector("input").value="Mute"

        };break;
        case "Mute":{
            mainMenu.pause();
            document.querySelector("input").value="Unmute"
        }
    }
})
document.querySelector(".play").addEventListener("click",_=>{
    setTimeout('window.location.href="main.html"', 0);
})
//const playerName = prompt("Podaj nazwę gracza!")
//let player = new Player(playerName)
