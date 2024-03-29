import Cat from "./catConstructor.js"
import {serializer} from "./serializer.js";

const images = ["./assets/EoCBackground.webp", "./assets/ItFBackground.webp", "./assets/CotCBackground.webp"]
document.body.style.backgroundImage = `url(${images[Math.round(Math.random()*2)]})`;


document.querySelector(".play").addEventListener("click", _=>{
    window.location = "./base.html";
})


if(serializer.deserialize(localStorage.getItem("team")) == undefined){
    localStorage.setItem("team",serializer.serialize([new Cat("Cat",100,9,"None","Cat.png", "Macho Cat", "MachoCat.png", "Mohawk Cat", "MohawkCat.png"),null,null,null,null,null]));
}


if(serializer.deserialize(localStorage.getItem("storage")) == undefined){
    localStorage.setItem("storage", serializer.serialize([]));
}


if(localStorage.getItem("stats") == undefined){
    localStorage.setItem("stats", JSON.stringify({}));
}
