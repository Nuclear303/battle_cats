import Cat from "./catConstructor.js"

const mainMenu = document.querySelector("audio")
document.querySelector(".mute_button").addEventListener("click",_=>{
    switch(document.querySelector(".mute_button").innerText){
        case "Unmute":{
            mainMenu.play();
            mainMenu.loop = true
            document.querySelector(".mute_button").innerText="Mute"

        };break;
        case "Mute":{
            mainMenu.pause();
            document.querySelector(".mute_button").innerText="Unmute"
        }
    }
})

const images = ["./assets/EoCBackground.webp", "./assets/ItFBackground.webp", "./assets/CotCBackground.webp"]
document.body.style.backgroundImage = `url(${images[Math.round(Math.random()*2)]})`;


document.querySelector(".play").addEventListener("click", _=>{
    window.location = "./base.html";
})

if(localStorage.getItem("team") == undefined){
    localStorage.setItem("team",JSON.stringify([new Cat("Cat",100,8,"None","cat.png"),null,null,null,null,null]));
}

if(localStorage.getItem("storage") == undefined){
    localStorage.setItem("storage", JSON.stringify([new Cat("Cat",100,8,"None","Hippoe.png"),new Cat("Cat",100,8,"None","Snache.png"),new Cat("Cat",100,8,"None","Doge.png")]));
}
