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
//last_chapter being an object made with this constructor,
//level_list being an object defined in another file, but last_chapter.level_list being an object which is a parameter of last_chapter object
export {Chapter}