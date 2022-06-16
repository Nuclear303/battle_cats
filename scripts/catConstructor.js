export default class Cat{
    constructor(name, base_health, base_damage, attribute){
        this.name = name;
        this.level = 1;
        this.attribute = attribute;
        this.health = base_health;
        this.damage = base_damage;
        this.xp = 0;
        this.maxXP = 100;
        this.damageCalc = _=>{
                if(this.damage >= Math.ceil(base_damage+1.3*Math.log2(this.level))){
                    this.damage++;
                    return
                }
                else{
                    this.damage = Math.ceil(base_damage+1.3*Math.log2(this.level))
                    return
                }
        }
        this.healthCalc =_=>{
            this.health = base_health+(this.level*10)
        }
        this.maxXPCalc = _=>{
            this.maxXP = 100+(this.level*50);
        }
        this.levelUp = _=>{
            this.level++;
            this.damageCalc();
            this.healthCalc();
            let toomuch = this.xp - this.maxXP;
            this.maxXPCalc();
            this.xp = 0+toomuch;
        }
        this.ifLevelCap =_=>{
            if(this.level == 100) return;
            if(this.xp >= this.maxXP){
                this.levelUp();
                alert(`${this.name} osiągnął level ${this.level}!`);
            }
        }
        this.attack = (enemy)=>{
            if(enemy.color!=this.attribute){
                enemy.health-=this.damage
            }
            else{
                enemy.health-=Math.ceil((this.damage)*1.3);
            }
            if(enemy.health <= 0){
                this.xp += enemy.reward;
                alert(`Pokonałeś ${enemy.name}! \nTwoja nagroda: ${enemy.reward} xp!`);
                this.ifLevelCap();
            }
        }
    }
}

