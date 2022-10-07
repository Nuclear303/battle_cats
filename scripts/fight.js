import Enemy from "../scripts/enemyConstructor.js"
let enemies = [
    new Enemy("Doge",100,1,8,"None",10,"cat.png")
]
document.querySelector(".fight").addEventListener("click", _=>{
    document.querySelector("main").innerHTML =`<figure><img src="${enemies[0].image}"><figcaption>${enemies[0].name}</figcaption></figure>`
})