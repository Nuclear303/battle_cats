import Enemy from "./EnemyConstructor.js";

const enemies = {
  EoC: {
    chapter1:[
      new Enemy("Doge",90,8,1,"None", 10,"Doge.png", false),
      new Enemy("Snache",100, 15, 1, "None", 15, "Snache.png", false),
      new Enemy("Those Guys", 200, 20, 1, "None", 25, "Those_Guys.png", false),
      new Enemy("Hippoe", 1000, 100, 1, "None", 50, "Hippoe.png", false),
      new Enemy("Pigge",1500,120,1, "Red", 50, "Pigge.png", false),
      new Enemy("Jackie Peng",1300,80,1,"None", 65, "Jackie_Peng.png", false),
      new Enemy("Gory", 1000, 80, 1, "None", 60, "Gory.png", false),
      new Enemy("Baa Baa", 500, 50, 1, "None", 40, "Baa_Baa.png", false),
      new Enemy("Sir Seal", 2500,150,1, "None", 80, "Sir_Seal.png", false),
      new Enemy("Croco", 70, 30, 1, "None", 20, "Croco.png", false),
      new Enemy("Le'boin", 4000, 654, 1, "None", 200, "Leboin.png", true),
      new Enemy("Mooth",5000,350, 1, "Floating", 175, "Mooth.png", false),
      new Enemy("One Horn", 15000, 500, 1, "Red", 300, "One_Horn.png", true),
      new Enemy("Squire Rel", 80, 30, 1, "None", 30, "Squire_Rel.png", false),
      new Enemy("Teacher Bear", 3000, 1000, 1, "None", 500, "Teacher_Bear.png", true)
    ],
    chapter2:[
      new Enemy("Doge",90,8,2,"None", 10,"Doge.png", false),
      new Enemy("Snache",100, 15, 2, "None", 15, "Snache.png", false),
      new Enemy("Those Guys", 200, 20, 2, "None", 25, "Those_Guys.png", false),
      new Enemy("Hippoe", 1000, 100, 2, "None", 50, "Hippoe.png", false),
      new Enemy("Pigge",1500,120,2, "Red", 50, "Pigge.png", false),
      new Enemy("Jackie Peng",1300,80,2,"None", 65, "Jackie_Peng.png", false),
      new Enemy("Gory", 1000, 80, 2, "None", 60, "Gory.png", false),
      new Enemy("Baa Baa", 500, 50, 2, "None", 40, "Baa_Baa.png", false),
      new Enemy("Sir Seal", 2500,150,2, "None", 80, "Sir_Seal.png", false),
      new Enemy("Croco", 70, 30, 2, "None", 20, "Croco.png", false),
      new Enemy("Le'boin", 4000, 654, 2, "None", 200, "Leboin.png", true),
      new Enemy("Mooth",5000,350, 2, "Floating", 175, "Mooth.png", false),
      new Enemy("One Horn", 15000, 500, 2, "Red", 300, "One_Horn.png", true),
      new Enemy("Squire Rel", 80, 30, 2, "None", 30, "Squire_Rel.png", false),
      new Enemy("Teacher Bear", 3000, 1000, 2, "None", 500, "Teacher_Bear.png", true)
     ],
    chapter3:[
      new Enemy("Doge",90,8,3,"None", 10,"Doge.png", false),
      new Enemy("Snache",100, 15, 3, "None", 15, "Snache.png", false),
      new Enemy("Those Guys", 200, 20, 3, "None", 25, "Those_Guys.png", false),
      new Enemy("Hippoe", 1000, 100, 3, "None", 50, "Hippoe.png", false),
      new Enemy("Pigge",1500,120,3, "Red", 50, "Pigge.png", false),
      new Enemy("Jackie Peng",1300,80,3,"None", 65, "Jackie_Peng.png", false),
      new Enemy("Gory", 1000, 80, 3, "None", 60, "Gory.png", false),
      new Enemy("Baa Baa", 500, 50, 3, "None", 40, "Baa_Baa.png", false),
      new Enemy("Sir Seal", 2500,150,3, "None", 80, "Sir_Seal.png", false),
      new Enemy("Croco", 70, 30, 3, "None", 20, "Croco.png", false),
      new Enemy("Le'boin", 4000, 654, 3, "None", 200, "Leboin.png", true),
      new Enemy("Mooth",5000,350, 3, "Floating", 175, "Mooth.png", false),
      new Enemy("One Horn", 15000, 500, 3, "Red", 300, "One_Horn.png", true),
      new Enemy("Squire Rel", 80, 30, 3, "None", 30, "Squire_Rel.png", false),
      new Enemy("Teacher Bear", 3000, 1000, 3, "None", 500, "Teacher_Bear.png", true)
     ]
  }
}


if(localStorage.getItem("enemies") == undefined){
  localStorage.setItem("enemies", JSON.stringify(enemies));
}
