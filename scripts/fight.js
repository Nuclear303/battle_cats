import {save} from "./save.js"
import { serializer } from "./serializer.js"
let regular = []
let bosses = []

function checkIfBoss(enemy){   
    if(enemy.isBoss){
        bosses.push(enemy)
    }
    else{
        regular.push(enemy);
    }
}

const enemies = serializer.deserialize(localStorage.getItem("enemies"));
switch(localStorage.getItem("currentChapter")){
    case "EoC1":{
        enemies.EoC.chapter1.forEach(checkIfBoss);
        break;
    }
    case "EoC2":{
        enemies.EoC.chapter2.forEach(checkIfBoss);
        break;
    }
    case "EoC3":{
        enemies.EoC.chapter3.forEach(checkIfBoss);
        break;
    }
}

function attack(cat, enemy){
    if(cat.attack(enemy) != 0){
        enemy.attack(cat)
    }
}

function display(cat, enemy){
    document.querySelector(".arena").innerHTML = `<div class="baddie"><h2>${enemy.name}</h2><img src="${enemy.image}"><p> Health: ${enemy.health}/${enemy.maxHealth}</p></div><div class="fighter"><h2>${cat.name}</h2><img src="${cat.image}"><p> Health: ${cat.health}/${cat.maxHealth}</p></div>`
}

function getEnemy(){
    let rnd = Math.floor(Math.random()*(regular.length+1)); 
    if(rnd == regular.length){
        rnd = Math.floor(Math.random()*bosses.length);
        document.querySelector("main").innerHTML =`<figure class="enemy"><div style="background-color: rgba(255, 0, 0, 0.75);"><img src="${bosses[rnd].image}" ></div><span class="stats">Health:<br>${bosses[rnd].health}</span><span class="stats">Color:<br>${bosses[rnd].color}</span><figcaption>${bosses[rnd].name}</figcaption></figure>`
        localStorage.setItem("enemy",serializer.serialize(bosses[rnd]));
    }
    else{
        localStorage.setItem("enemy",serializer.serialize(regular[rnd]));
        document.querySelector("main").innerHTML =`<figure class="enemy"><div><img src="${regular[rnd].image}"></div><span class="stats">Health:<br>${regular[rnd].health}</span><span class="stats">Color:<br>${regular[rnd].color}</span><figcaption>${regular[rnd].name}</figcaption></figure>`
    }
    document.querySelector("main").innerHTML += "<button class='battle'>Battle!</button><button class='flee'>Flee!</button>"
    document.querySelector(".flee").addEventListener("click", getEnemy);

    document.querySelector(".battle").addEventListener("click", _=>{
        document.querySelector("main").innerHTML = `<div><h1>Choose a cat</h1><div class="cats"></div></div>`;
        let team = serializer.deserialize(localStorage.getItem("team"));
        team.forEach(cat=>{
            if(cat != null){
                let button = document.createElement("button");
                button.textContent = `${cat.name}`;
                button.addEventListener("click", _=> {
                    localStorage.setItem("chosenCat", serializer.serialize(cat));
                    if(cat.health <=0){
                        alert("This cat has 0 health!!");
                        location.reload();
                    }
                    else{
                        document.querySelector("main").innerHTML = "<div class='arena'></div><button class='nextTurn'>Next Turn!</button>"
                        let chosenCat = serializer.deserialize(localStorage.getItem("chosenCat"));
                        let enemy = serializer.deserialize(localStorage.getItem("enemy"));
                        display(chosenCat, enemy);
                        document.querySelector(".nextTurn").addEventListener("click", _=>{
                            attack(chosenCat, enemy);
                            display(chosenCat, enemy);
                            if(chosenCat.health <= 0){
                                chosenCat.health = 0;
                                location.reload();
                            }
                            if(enemy.health <= 0 ){
                                location.reload();
                            }
                            let team = serializer.deserialize(localStorage.getItem("team"));
                            for(let i = 0; i < 6; i++){
                                if(team[i].name == chosenCat.name){
                                    team[i] = chosenCat;
                                    save(team);
                                }
                            }
                            
                        })
                    }

                });
                document.querySelector(".cats").appendChild(button);
            }
        })
        
    })
}

document.querySelector(".fight").addEventListener("click", _=>{
    getEnemy();   
})
