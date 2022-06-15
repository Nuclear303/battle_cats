const mainMenu = document.querySelector("audio")
document.querySelector(".mute_button").addEventListener("click",_=>{
    switch(document.querySelector(".mute_button").value){
        case "Unmute":{
            mainMenu.play();
            mainMenu.loop = true
            document.querySelector(".mute_button").value="Mute"

        };break;
        case "Mute":{
            mainMenu.pause();
            document.querySelector(".mute_button").value="Unmute"
        }
    }
})
document.querySelector(".play").addEventListener("click",_=>{

    document.querySelector("img").parentNode.removeChild(document.querySelector("img"));
    document.querySelector(".play_button").parentNode.removeChild(document.querySelector(".play_button")); 
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll(".chapter")[i].style.visibility='visible';
        document.querySelectorAll(".chapter")[i].style.animation="chapSlide 1500ms forwards";
        
    }


})
import Cat from "./catConstructor.js"
import Enemy from "./enemyConstructor.js"
const tank = new Cat('Tank Cat', 400, 2, "None");
const doge = new Enemy("Doge", 4, 1, 1, "White",25);
const doge2 = new Enemy("Doge", 4, 1, 1, "White",25);
const doge3 = new Enemy("Doge", 4, 1, 1, "White",25);
const doge4 = new Enemy("Doge", 4, 1, 1, "White",25);
tank.attack(doge);
console.log(doge.health);
tank.attack(doge);
console.log(doge.health)
tank.attack(doge2);
tank.attack(doge2);
tank.attack(doge3);
tank.attack(doge3);
tank.attack(doge4);
tank.attack(doge4);


