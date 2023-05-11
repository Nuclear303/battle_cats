import {save} from "./save.js"
import { serializer } from "./serializer.js";
const main = document.querySelector("main");
let storage = serializer.deserialize(localStorage.getItem("storage"));

const transfer = (index, cat) =>{
    let catteam = serializer.deserialize(localStorage.getItem("team"));
    let ix = index-1;
    if(catteam[ix]==null){
        catteam[ix] = cat;
        save(catteam);
        storage.forEach(item=>{
            if(item == cat){
                storage.splice(storage.indexOf(item),1);
                localStorage.setItem("storage", serializer.serialize(storage));
            }
        })
        location.reload();
    }
    else{
        let oldCat = catteam[ix];
        catteam[ix] = cat;
        storage.forEach(item=>{
            if(item == cat){
                storage[storage.indexOf(item)] = oldCat;
                localStorage.setItem("storage", serializer.serialize(storage));
            }
        })
        save(catteam);
        location.reload();
    }
}

storage.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'storage';
    const dataDiv = document.createElement('div');
    dataDiv.className = 'data';
    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';
    const image = document.createElement('img');
    image.src = cat.level >= 30 ? cat.trueImage : cat.level >= 10 ? cat.evolvedImage : cat.image;
    imgDiv.appendChild(image);
    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = cat.level >= 30 ? cat.trueName : cat.level >= 10 ? cat.evolvedName : cat.name;
    const hp = document.createElement('p');
    hp.className = 'hp';
    hp.textContent = `HP: ${cat.health}/${cat.maxHealth}`;
    const xp = document.createElement('p');
    xp.className = 'xp';
    xp.innerHTML = `<sub>0</sub><meter value="${cat.xp}" max="${cat.maxXP}"></meter><sub>${cat.maxXP}</sub>`;
    dataDiv.appendChild(imgDiv);
    dataDiv.appendChild(name);
    dataDiv.appendChild(hp);
    dataDiv.appendChild(xp);
    const useDiv = document.createElement('div');
    useDiv.className = 'use';
    for (let i = 1; i <= 6; i++) {
      const button = document.createElement('button');
      button.className = `use${i}`;
      button.textContent = `Use ${i}`;
      button.addEventListener('click', () => {
        transfer(i, cat);
      });
      useDiv.appendChild(button);
    }
    div.appendChild(dataDiv);
    div.appendChild(useDiv);
    main.appendChild(div);
  });