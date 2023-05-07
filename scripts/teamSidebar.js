import {serializer} from "./serializer.js";
var team = serializer.deserialize(localStorage.getItem("team"));
for(let i = 0; i < 6; i++){
  if(team[i] != null){
    document.querySelectorAll("div.catimage > img")[i].src = team[i].image;
    document.querySelectorAll(".cat-name")[i].textContent = `${team[i].name} lvl. ${team[i].level}`;
    document.querySelectorAll(".cat-xp")[i].innerHTML = `<sub>0</sub><meter value="${team[i].xp}" max="${team[i].maxXP}"></meter><sub>${team[i].maxXP}</sub>`;
    document.querySelectorAll(".cat-hp")[i].textContent = `HP: ${team[i].health}/${team[i].maxHealth}`;
  }
}

