import team from "./teams.js"
document.querySelector(".save_button").addEventListener("click", _=>{
    localStorage.setItem("team",JSON.stringify(team));
    document.querySelector(".saveText").textContent = "Saved the game";
    setTimeout(_=>{document.querySelector(".saveText").textContent = "";},3000)
})

