
import Cat from "./catConstructor.js"
import Enemy from "./enemyConstructor.js"
import Player from "./playerConstructor.js"
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

document.querySelector(".play").addEventListener("click", _=>{
    window.location = "./main.html";
})

if(localStorage.getItem("team") == undefined){
    localStorage.setItem("team",JSON.stringify([new Cat("Cat",100,8,"None","cat.png"),null,null,null,null,null]));
}
