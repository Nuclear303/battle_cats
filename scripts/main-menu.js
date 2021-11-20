const mainMenu = document.querySelector("audio")
document.querySelector("input").addEventListener("click",_=>{
    switch(document.querySelector("input").value){
        case "Unmute":{
            mainMenu.play();
            mainMenu.loop = true
            document.querySelector("input").value="Mute"

        };break;
        case "Mute":{
            mainMenu.pause();
            document.querySelector("input").value="Unmute"
        }
    }
})
document.querySelector(".play").addEventListener("click",_=>{
    setTimeout('window.location.href="main.html"', 0);
})
//const playerName = prompt("Podaj nazwę gracza!")
//let player = new Player(playerName)
