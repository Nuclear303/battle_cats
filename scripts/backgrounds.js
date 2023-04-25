const EoC = ["../assets/Bg000.webp", "../assets/Bg001.webp", "../assets/Bg002.webp", "../assets/Bg003.webp","../assets/Bg004.webp", "../assets/Bg005.webp"];
const ItF = [...EoC, "../assets/Bg015.webp", "../assets/Bg016.webp", "../assets/Bg017.webp"];
const CotC = ["../assets/Cotc_1.webp","../assets/Cotc_2.webp","../assets/Cotc_3.webp","../assets/Cotc_5a.webp","../assets/Cotc_6a.webp","../assets/Cotc_7.webp"];
switch(localStorage.getItem("currentChapter").substring(0,3)){
    case "EoC":{
        document.body.style.backgroundImage = `url(${EoC[Math.round(Math.random()*EoC.length)]})`;
        break;
    }
    case "ItF":{
        document.body.style.backgroundImage = `url(${ItF[Math.round(Math.random()*ItF.length)]})`;
        break;
    }
    case "CotC":{
        document.body.style.backgroundImage = `url(${CotC[Math.round(Math.random()*CotC.length)]})`;
        break;
    }
}