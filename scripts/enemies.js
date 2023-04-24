import Enemy from "./enemyConstructor.js";

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
  },
  ItF:{
    chapter1:[
      new Enemy("Shibalien", 900, 150, 1, "Alien", 100, "Shibalien.png", false),
      new Enemy("Hyppoh", 7000, 200, 1, "Alien", 300, "Hyppoh.png",false),
      new Enemy("Imperator Sael", 15000, 500, 1, "Alien", 500, "Imperator_Sael.png", false),
      new Enemy("Helmut Krabbe", 9000, 300, 1, "Alien", 400, "Helmut_Krabbe.png", false),
      new Enemy("Kroxo", 3000, 900, 1, "Alien", 200, "Kroxo.png", false),
      new Enemy("Ursamajor", 30000, 1000, 1, "Alien", 1000, "Ursamajor.png", true),
      new Enemy("Elizabeth the LVIth",60000, 250, 1, "Alien", 2000, "Elizabeth_the_56th.png", true),
      new Enemy("I.M. Phace", 44444, 1333, 1, "Alien", 1500, "IMPhace.png", true),
      new Enemy("LeMurr", 20000, 800, 1, "Alien", 900, "LeMurr.png", false)
    ],
    chapter2:[
      new Enemy("Shibalien", 900, 150, 2, "Alien", 100, "Shibalien.png", false),
      new Enemy("Hyppoh", 7000, 200, 2, "Alien", 300, "Hyppoh.png",false),
      new Enemy("Imperator Sael", 15000, 500, 2, "Alien", 500, "Imperator_Sael.png", false),
      new Enemy("Helmut Krabbe", 9000, 300, 2, "Alien", 400, "Helmut_Krabbe.png", false),
      new Enemy("Kroxo", 3000, 900, 2, "Alien", 200, "Kroxo.png", false),
      new Enemy("Ursamajor", 30000, 1000, 2, "Alien", 1000, "Ursamajor.png", true),
      new Enemy("Elizabeth the LVIth",60000, 250, 2, "Alien", 2000, "Elizabeth_the_56th.png", true),
      new Enemy("I.M. Phace", 44444, 1333, 2, "Alien", 1500, "IMPhace.png", true),
      new Enemy("LeMurr", 20000, 800, 2, "Alien", 900, "LeMurr.png", false),
      new Enemy("Scissoroo", 24000, 2800,1 ,"Alien", 1000, "Scissoroo.png", false),
      new Enemy("Mistress Celeboodle", 4500, 3750, 1, 1000, "Mistress Celeboodle", false)
    ],
    chapter3:[
      new Enemy("Shibalien", 900, 150, 3, "Alien", 100, "Shibalien.png", false),
      new Enemy("Hyppoh", 7000, 200, 3, "Alien", 300, "Hyppoh.png",false),
      new Enemy("Imperator Sael", 15000, 500, 3, "Alien", 500, "Imperator_Sael.png", false),
      new Enemy("Helmut Krabbe", 9000, 300, 3, "Alien", 400, "Helmut_Krabbe.png", false),
      new Enemy("Kroxo", 3000, 900, 3, "Alien", 200, "Kroxo.png", false),
      new Enemy("Ursamajor", 30000, 1000, 3, "Alien", 1000, "Ursamajor.png", true),
      new Enemy("Elizabeth the LVIth",60000, 250, 3, "Alien", 2000, "Elizabeth_the_56th.png", true),
      new Enemy("I.M. Phace", 44444, 1333, 3, "Alien", 1500, "IMPhace.png", true),
      new Enemy("LeMurr", 20000, 800, 3, "Alien", 900, "LeMurr.png", false),
      new Enemy("Calamary", 45000, 1200, 1, "Alien", 2000, "Calamary.png", false),
      new Enemy("Alpacky", 175000, 1750, 1, "Alien", 5000, "Alpacky.png", true)
    ]
  },
  CotC:{
    chapter1:[
      new Enemy("Shibalien Elite", 7000, 500, "Alien", 400, "Shibalien_Elite.png", false)
    ],
    chapter2:[],
    chapter3:[]
  }
}

localStorage.setItem("enemies", JSON.stringify(enemies));
