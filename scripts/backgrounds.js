document.addEventListener("DOMContentLoaded", _=>{
    const EoC = ["../assets/Bg000.webp", "../assets/Bg001.webp", "../assets/Bg002.webp", "../assets/Bg003.webp","../assets/Bg004.webp", "../assets/Bg005.webp"];
    const ItF = [...EoC, "../assets/Bg015.webp", "../assets/Bg016.webp", "../assets/Bg017.webp"];
    const CotC = ["../assets/Cotc_1.webp","../assets/Cotc_2.webp","../assets/Cotc_3.webp","../assets/Cotc_5a.webp","../assets/Cotc_6a.webp","../assets/Cotc_7.webp"];
    switch(localStorage.getItem("currentChapter").substring(0,3)){
    case "EoC":{
        document.querySelector("body").style = `background-image: url(${EoC[Math.floor(Math.random()*EoC.length)]}) !important`;
        break;
    }
    case "ItF":{
        document.querySelector("body").style = `background-image: url(${ItF[Math.floor(Math.random()*ItF.length)]})`;
        break;
    }
    case "CotC":{
        document.querySelector("body").style = `background-image: url(${CotC[Math.floor(Math.random()*CotC.length)]})`;
        break;
    }
    }
})