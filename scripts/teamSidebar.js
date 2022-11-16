const team = JSON.parse(localStorage.getItem("team"));
for(let i = 0; i < 6; i++){
  if(team[i] != null){
    document.querySelectorAll("div.catimage > img")[i].src = team[i].image;
    document.querySelectorAll(".cat-name")[i].textContent = team[i].name;
    document.querySelectorAll(".cat-hp")[i].textContent = `${team[i].health}/${team[i].maxHealth}`;
    document.querySelectorAll(".cat-xp")[i].textContent = `${team[i].xp}/${team[i].maxXP}`;
  }
}