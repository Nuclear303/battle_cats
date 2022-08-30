export default class Enemy{
  constructor(name,base_health,chapter, base_damage, color, reward) {
    this.name=name;
    this.chapter = chapter;  
    this.health = base_health*this.chapter;
    this.damage = base_damage*this.chapter;
    this.color = color;
    this.reward = reward*this.chapter;
  }
}
