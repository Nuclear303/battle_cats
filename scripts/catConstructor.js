class Cat{
    constructor(nazwa, base_health, base_damage,effect){
        this.nazwa = nazwa
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
        this.effect = effect
    }
}
