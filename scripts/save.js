import {serializer} from "./localforageSetup.js";
export function save(team){
    localStorage.setItem("team",serializer.serialize(team));
}