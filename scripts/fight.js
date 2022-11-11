import Enemy from "../scripts/enemyConstructor.js"
let enemies = [
    new Enemy("Doge",100,1,8,"None",10,"doge.png"),
    new Enemy("Snache", 100,1,15,"None", 15, "Snache.png")
]

document.querySelector(".fight").addEventListener("click", _=>{
    let rnd = Math.floor(Math.random()*enemies.length); 
    document.querySelector("main").innerHTML =`<figure class="enemy"><div><img src="${enemies[rnd].image}"></div><span class="stats">Health:<br>${enemies[rnd].health}</span><span class="stats">Color:<br>${enemies[rnd].color}</span><figcaption>${enemies[rnd].name}</figcaption></figure>`
})