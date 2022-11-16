import Enemy from "../scripts/enemyConstructor.js"
let enemies = [
    new Enemy("Doge",100,1,8,"None",10,"doge.png",false),
    new Enemy("Snache", 100,1,15,"None", 15, "Snache.png",false),
    new Enemy("Those Guys", 200,1,20,"None",25,"Those_Guys.png",false),
    new Enemy("Hippoe",1000, 1, 100, "None",100,"Hippoe.png", false)
]
let bosses = [
]
document.querySelector(".fight").addEventListener("click", _=>{
    let rnd = Math.floor(Math.random()*enemies.length+1); 
    if(rnd == enemies.length){
        rnd = Math.floor(Math.random()*bosses.length);
        document.querySelector("main").innerHTML =`<figure class="enemy"><div style="background-color: rgba(255, 0, 0, 0.75);"><img src="${bosses[rnd].image}" ></div><span class="stats">Health:<br>${bosses[rnd].health}</span><span class="stats">Color:<br>${bosses[rnd].color}</span><figcaption>${bosses[rnd].name}</figcaption></figure>`
        return;
    }
    document.querySelector("main").innerHTML =`<figure class="enemy"><div><img src="${enemies[rnd].image}"></div><span class="stats">Health:<br>${enemies[rnd].health}</span><span class="stats">Color:<br>${enemies[rnd].color}</span><figcaption>${enemies[rnd].name}</figcaption></figure>`
})