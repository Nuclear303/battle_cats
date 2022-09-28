
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
document.querySelector(".play").addEventListener("click",_=>{

    document.querySelector("img").parentNode.removeChild(document.querySelector("img"));
    document.querySelector(".play_button").parentNode.removeChild(document.querySelector(".play_button")); 
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll(".chapter")[i].style.visibility='visible';
        document.querySelectorAll(".chapter")[i].style.animation="chapSlide 1500ms forwards";
        
    }


})



let tank = new Cat('Tank Cat', 400, 2, "None");
let cat = new Cat('Cat', 100,8, "None");

let team = [
    tank,
    cat
]
cat.health-=30
console.log(cat.health)

const deleteHealMessage = _=>{
    document.querySelector(".heal-result").textContent = "";
}

document.querySelector(".heal-button").addEventListener("click", _=> {
    let healed = true;
    team.every(meow =>{
        if(meow.maxHealth != meow.health){
            healed = false;
            return false;
        }
        console.log(meow.name)
        return true;
    })
    if(!healed){
        team.forEach(meow =>{        
            meow.health = meow.maxHealth;
        })
        document.querySelector(".heal-result").textContent = "Your Cats have been succesfully healed"
        setTimeout(deleteHealMessage, 3000);
    }
    else{
        document.querySelector(".heal-result").textContent = "Your Cats didn't need to be healed";
        setTimeout(deleteHealMessage, 3000);
    }
});
