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
const tank = new Cat('Tank Cat', 400, 2, "None");
console.log(tank);
