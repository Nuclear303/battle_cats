import Cat from "./catConstructor.js"
import localforage from "localforage";

const images = ["./assets/EoCBackground.webp", "./assets/ItFBackground.webp", "./assets/CotCBackground.webp"]
document.body.style.backgroundImage = `url(${images[Math.round(Math.random()*2)]})`;


document.querySelector(".play").addEventListener("click", _=>{
    window.location = "./base.html";
})

if(localforage.getItem("team") == undefined){
    localforage.setItem("team",[new Cat("Cat",100,8,"None","cat.png"),null,null,null,null,null]);
}

if(localforage.getItem("storage") == undefined){
    localforage.setItem("storage", [new Cat("Cat",100,8,"None","Hippoe.png"),new Cat("Cat",100,8,"None","Snache.png"),new Cat("Cat",100,8,"None","Doge.png")]);
}
