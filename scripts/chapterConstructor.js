const eoc1level = {
    Korea = {
        completed= false,
        enemies= {
            
        }
    }
}
class Chapter{
    constructor(name, last_chapter,level_list, number){
        this.name= name;
        this.number = number;
        this.level_list = level_list;
        this.unlocked = _=>{
            if(name == "EoC 1"){
                return true;
            }
            else if(last_chapter.level_list.Moon.completed == true){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
let eoc1 = new Chapter("EoC 1","None",eoc1level,1);
//last_chapter being an object made with this constructor,
//level_list being an object defined in another file, but last_chapter.level_list being an object which is a parameter of last_chapter object