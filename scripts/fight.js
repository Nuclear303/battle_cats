import Enemy from "../scripts/enemyConstructor.js"
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

const enemies = JSON.parse(localStorage.getItem("enemies"));
switch(localStorage.getItem("currentChapter")){
    case "EoC1":{
        enemies.EoC.chapter1.forEach(checkIfBoss);
        break;
    }
}
document.querySelector(".fight").addEventListener("click", _=>{
    let rnd = Math.floor(Math.random()*enemies.length+1); 
    if(rnd == enemies.length){
        rnd = Math.floor(Math.random()*bosses.length);
        document.querySelector("main").innerHTML =`<figure class="enemy"><div style="background-color: rgba(255, 0, 0, 0.75);"><img src="${bosses[rnd].image}" ></div><span class="stats">Health:<br>${bosses[rnd].health}</span><span class="stats">Color:<br>${bosses[rnd].color}</span><figcaption>${bosses[rnd].name}</figcaption></figure>`
        return;
    }
    document.querySelector("main").innerHTML =`<figure class="enemy"><div><img src="${enemies[rnd].image}"></div><span class="stats">Health:<br>${enemies[rnd].health}</span><span class="stats">Color:<br>${enemies[rnd].color}</span><figcaption>${enemies[rnd].name}</figcaption></figure>`
})
