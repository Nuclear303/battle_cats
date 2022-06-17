import Player from "./playerConstructor.js";
if(localStorage.getItem("player") == undefined){
    document.querySelector("p.user").innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
    document.querySelector("button.acceptUser").addEventListener("click",_=>{
        const player = new Player(document.querySelector("input.userInput").value);
        localStorage.setItem("player",player.nazwa);
        document.querySelector("p.user").innerHTML += "<br><span style='color:green;'>&#10004; Zaakceptowano</span>";
    })
}
else{
    document.querySelector("p.user").innerHTML = `Witaj, ${localStorage.getItem("player")}<br><button class='changeName'>Zmień nazwę</button>`;
    document.querySelector("button.changeName").addEventListener("click",_=>{
        document.querySelector("p.user").innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
        document.querySelector("button.acceptUser").addEventListener("click",_=>{
            const player = new Player(document.querySelector("input.userInput").value);
            localStorage.setItem("player",player.nazwa);
            document.querySelector("p.user").innerHTML += "<br><span style='color:green;'>&#10004; Zaakceptowano</span>"
        })
    })
}