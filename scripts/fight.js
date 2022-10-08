import Enemy from "../scripts/enemyConstructor.js"
let enemies = [
    new Enemy("Doge",100,1,8,"None",10,"cat.png")
]
document.querySelector(".fight").addEventListener("click", _=>{
    document.querySelector("main").innerHTML =`<figure class="enemy"><div><img src="${enemies[0].image}"></div><span class="stats">Health:<br>${enemies[0].health}</span><span class="stats">Color:<br>${enemies[0].color}</span><figcaption>${enemies[0].name}</figcaption></figure>`
})