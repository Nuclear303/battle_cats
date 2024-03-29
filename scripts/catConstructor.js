export default class Cat{
    constructor(catname, base_health, base_damage, attribute, image, evolvedName, evolvedImage, trueName, trueImage){
        this.name = catname;
        this.level = 1;
        this.attribute = attribute;
        this.health = base_health;
        this.maxHealth = base_health;
        this.damage = base_damage;
        this.xp = 99;
        this.maxXP = 100;
        this.image = `../assets/${image}`;
        this.evolvedImage = `../assets/${evolvedImage}`;
        this.evolvedName = evolvedName;
        this.trueName = trueName;
        this.trueImage = `../assets/${trueImage}`;
        this.damageCalc = () =>{
                if(this.damage >= Math.ceil(this.damage+1.3*Math.log2(this.level))){
                    this.damage++;
                    return
                }
                else{
                    this.damage = Math.ceil(this.damage+1.3*Math.log2(this.level))
                    return
                }
        }
        this.healthCalc =() =>{
            this.maxHealth = this.maxHealth+(this.level*10);
            this.health = this.health + (this.level*10);
        }
        this.maxXPCalc = () =>{
            this.maxXP = 100+(this.level*50);
        }
        

        this.levelUp = () =>{
            this.level++;
            this.damageCalc();
            this.healthCalc();
            let toomuch = this.xp - this.maxXP;
            this.maxXPCalc();
            this.xp = 0+toomuch;
        }
        this.ifLevelCap = () =>{
            if(this.level == 100) return;
            if(this.xp >= this.maxXP){
                this.levelUp();
                alert(`${this.name} osiągnął level ${this.level}!`);
            }
        }
        this.attack = (enemy) =>{
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
                return 0;
            }
        }
    }

}

