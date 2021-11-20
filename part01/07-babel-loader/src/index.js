import helloWorld from "./hello-world"; 
import imgsrc from "./assets/an.png";
import imgsrc2 from "./assets/WWF.jpg";
import imgsrc3 from "./assets/w.gif"
import exampleTxt from "./assets/example.txt";
import "./style.css"
import "./style.less"
helloWorld();
const img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = imgsrc2;
document.body.appendChild(img2);

const block = document.createElement('div');
block.textContent = exampleTxt;
block.classList.add('block-bg')
document.body.appendChild(block);

const img3 = document.createElement('img');
img3.src = imgsrc3;
document.body.appendChild(img3);
