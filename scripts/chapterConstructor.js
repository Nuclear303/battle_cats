class Chapter{
    constructor(name, last_chapter,level_list){
        this.name= name;
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