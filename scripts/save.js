import {serializer} from "./serializer.js";
export function save(team){
    localStorage.setItem("team",serializer.serialize(team));
}