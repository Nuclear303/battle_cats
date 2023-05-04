export default class Enemy{
/**
 * 
 * @param name Name of the enemy
 * @param base_health Base health
 * @param chapter Chapter number strength (1|2|3)
 * @param base_damage Base damage
 * @param color Trait of the enemy e.g. "Zombie"
 * @param reward XP reward for killing the enemy
 * @param image Name of the image e.g. cat.png
 * @param boss true if the enemy is a boss, otherwise false
 */
  constructor(name,base_health, base_damage, chapter,  color, reward, image,boss) {
    this.name=name;
    this.chapter = chapter;
    switch(chapter){
      case 1:{
        this.health = base_health;
        this.damage = base_damage;
        break;
      }
      case 2:{
        this.health = base_health * 1.5;
        this.damage = base_damage * 1.5;
        break;
      }
      case 3:{
        this.health = base_health * 4;
        this.damage = base_damage * 4;
        break;
      }
    }
    this.maxHealth = this.health;
    this.color = color;
    this.reward = reward*this.chapter;
    this.image= `../assets/${image}`;
    this.isBoss = boss;
    this.attack = function(enemy){
      enemy.health-=this.damage
      if(enemy.health <= 0){
          alert(`Przegrałeś walkę.`);
          return 0;
      }
  }
  }
}
