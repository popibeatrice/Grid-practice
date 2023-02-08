// imports
import "../styles/index.css";
import "./sandbox.js";
import * as urls from "./sandbox.js";

// variables
const img1 = document.querySelector(".img1") as HTMLImageElement;
const img2 = document.querySelector(".img2") as HTMLImageElement;
const img3 = document.querySelector(".img3") as HTMLImageElement;
const img4 = document.querySelector(".img4") as HTMLImageElement;
const img5 = document.querySelector(".img5") as HTMLImageElement;
const article_image = document.querySelector(".article-image") as HTMLImageElement;
const main = document.querySelector("main");
const main_title = document.querySelector(".title");
const infomag = document.querySelector(".infomag") as HTMLImageElement;
const desc = document.querySelector(".desc");
const POPUP = document.querySelector("article");
const inchizatoare = document.querySelector(".close-popup");
const DontYouDare = document.querySelector(".do-not-touch-me");

// images
img1.src = urls.Riko;
img2.src = urls.Reg;
img3.src = urls.Faputa;
img4.src = urls.Nanachi;
img5.src = urls.Prushka;

///array
 const infos = 
  [
    {
        title: "Riko",
        img: urls.Riko_usage,
        text: "Her dream is to become a White Whistle, a legendary type of Delver, and explore the depths of the Abyss with her group in order to learn its many secrets and to find her mother."
    },
    {
        title: "Reg",
        img: urls.Reg_usage,
        text: "Having a seemingly artificial body, Reg might be the only being completely immune to the Curse of the Abyss. Because of this, he is sometimes referred to as \" The Treasure of the Deep.\""
    },
    {},
    {},
    {}

];
    


// popup

inchizatoare.addEventListener("click", e => {
    POPUP.classList.add("scale-0");
    DontYouDare.classList.add("pointer-events-none");
    main.classList.remove("opacity-60");
})

main.addEventListener('click', e => {

    const element = e.target as HTMLElement;
    if(element.tagName === "IMG")
    {
       const poza = element.classList[0][3] as unknown;
       POPUP.classList.remove("scale-0");
       DontYouDare.classList.remove("pointer-events-none");
       main_title.textContent = infos[(poza as number) - 1].title;
       desc.textContent = infos[(poza as number) - 1].text;
       infomag.src = infos[(poza as number) - 1].img;
       main.classList.add("opacity-60");

    }
});