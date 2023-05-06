import { save } from "./save.js"
import {serializer} from "./serializer.js";

let team = serializer.deserialize(localStorage.getItem("team"));
const deleteHealMessage = _=>{
    document.querySelector(".heal-result").textContent = "";
}

document.querySelector(".heal-button").addEventListener("click", _=> {
    let healed = true;
    team.every(meow =>{
        meow.health -= 10;
        if(meow){
            if(meow.maxHealth != meow.health){
                healed = false;
                return false;
            }
            return true;
        }
        return true;
    })
    if(!healed){
        team.forEach(meow =>{   
            if(meow){
                meow.health = meow.maxHealth;
            }     
        })
        document.querySelector(".heal-result").textContent = "Your Cats have been succesfully healed"
        setTimeout(deleteHealMessage, 3000);
        save(team);
        location.reload();
    }
    else{
        document.querySelector(".heal-result").textContent = "Your Cats didn't need to be healed";
        setTimeout(deleteHealMessage, 3000);
    }
});

