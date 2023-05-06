let user = document.querySelector("p.user");
let acceptUser;

function accept(){
    acceptUser = document.querySelector("button.acceptUser");
    acceptUser.addEventListener("click",_=>{
        localStorage.setItem("player",document.querySelector("input.userInput").value);
        user.innerHTML += "<br><span style='color:green;'>&#10004; Zaakceptowano</span>"
        setTimeout(()=>{location.assign(".")}, 1500);
    })
}

let userName = localStorage.getItem("player")
    if(userName == undefined){
        user.innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
        accept();
    }
    else{
        user.innerHTML = `Witaj, ${userName}<br><button class='changeName'>Zmień nazwę</button>`;
        document.querySelector("button.changeName").addEventListener("click",_=>{
           user.innerHTML = "<input class='userInput' type='text' placeholder='Wpisz nazwę gracza...'><br><button class='acceptUser'>Akceptuj</button>";
           accept();
        })
    }


