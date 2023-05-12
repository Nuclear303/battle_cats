export function AddStat(enemyName){
  let stats = JSON.parse(localStorage.getItem("stats"));
  if(stats.hasOwnProperty(enemyName)){
    stats[enemyName] += 1;
  }
  else{
    stats[enemyName] = 1;
  }
  localStorage.setItem("stats", JSON.stringify(stats));
}

if(location.href.includes("stats/index.html")){
  let stats = JSON.parse(localStorage.getItem("stats"));
  const main = document.querySelector("main");
  if(Object.keys(stats).length === 0) {
    let stat = document.createElement("div");
    stat.className = "stat";
    stat.innerHTML = `<h1>You haven't killed any enemies yet! Go hunt some baddies!</h1>`;
    main.appendChild(stat);
  }
  else{
    main.innerHTML = "<h1>Your statistics:</h1>"
    Object.keys(stats).forEach(enemy=>{
      let stat = document.createElement("div");
      stat.className = "stat";
      stat.innerHTML = `<b>${enemy}</b>: ${stats[enemy]} killed`;
      main.appendChild(stat);
    })
  }
}