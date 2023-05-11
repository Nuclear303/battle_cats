import {serializer} from "./serializer.js";
var team = serializer.deserialize(localStorage.getItem("team"));
for(let i = 0; i < 6; i++){
  if(team[i] != null){
    document.querySelectorAll("div.catimage > img")[i].src = team[i].level >= 30 ? team[i].trueImage : team[i].level >= 10 ? team[i].evolvedImage : team[i].image;
    let name = team[i].level >= 30 ? team[i].trueName : team[i].level >= 10 ? team[i].evolvedName : team[i].name;
    document.querySelectorAll(".cat-name")[i].textContent = `${name} lvl. ${team[i].level}`;
    document.querySelectorAll(".cat-xp")[i].innerHTML = `<sub>0</sub><meter value="${team[i].xp}" max="${team[i].maxXP}"></meter><sub>${team[i].maxXP}</sub>`;
    document.querySelectorAll(".cat-hp")[i].textContent = `HP: ${team[i].health}/${team[i].maxHealth}`;
  }
}

