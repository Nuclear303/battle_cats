export default class Cat{
    constructor(name, base_health, base_damage, attribute){
        this.name = name;
        this.level = 1 
        this.damageCalc = _=>{
            if(this.level==1){
                this.damage = base_damage
            }
            else{
                this.damage = Math.ceil(base_damage*Math.log(this.level))+1
            }
        }
        this.health = base_health+(this.level*10)
        this.attribute = attribute;
    }
}

