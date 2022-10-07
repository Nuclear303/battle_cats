import team from "./teams.js"
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