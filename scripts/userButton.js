let user = document.querySelector("p.user");
let acceptUser = document.querySelector("button.acceptUser");

function accept(){
    acceptUser.addEventListener("click",_=>{
        localStorage.setItem("player",document.querySelector("input.userInput").value);
        user.innerHTML += "<br><span style='color:green;'>&#10004; Zaakceptowano</span>"
    })
}


if(localStorage.getItem("player") == undefined){
    user.innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
    accept();
}
else{
    user.innerHTML = `Witaj, ${localStorage.getItem("player")}<br><button class='changeName'>Zmień nazwę</button>`;
    document.querySelector("button.changeName").addEventListener("click",_=>{
       user.innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
       accept();
    })
}
