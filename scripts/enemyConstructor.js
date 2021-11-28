class Enemy{
    constructor(name,base_health,chapter, base_damage, attribute){
        this.name=name;
        this.chapter = chapter;  
        this.health = base_health*this.chapter;
        this.damage = base_damage*this.chapter;
        this.attribute = attribute;
    }
}
export{Enemy}