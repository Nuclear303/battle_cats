const team = JSON.parse(localStorage.getItem("team"));
for(let i = 0; i < 6; i++){
  if(team[i] != null){
    document.querySelectorAll("div.catimage > img")[i].src = team[i].image;
    document.querySelectorAll(".cat-name")[i].textContent = team[i].name;
<<<<<<< Updated upstream
    document.querySelectorAll(".cat-xp")[i].innerHTML = `<sub>0</sub><meter value="${team[i].xp}" max="${team[i].maxXP}"></meter><sub>${team[i].maxXP}</sub>`;
    document.querySelectorAll(".cat-hp")[i].textContent = `HP: ${team[i].health}/${team[i].maxHealth}`;
=======
    document.querySelectorAll(".cat-hp")[i].innerHTML = `Health: <meter min="0" max="${team[i].maxHealth}" value="${team[i].health}"></meter>`;
    document.querySelectorAll(".cat-xp")[i].textContent = `Experience: ${team[i].xp}/${team[i].maxXP}`;
>>>>>>> Stashed changes
  }
}