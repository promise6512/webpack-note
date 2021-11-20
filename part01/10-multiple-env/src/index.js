import helloWorld from "./hello-world"; 
import imgsrc from "./assets/an.png";
import imgsrc2 from "./assets/WWF.jpg";
import imgsrc3 from "./assets/w.gif"
import exampleTxt from "./assets/example.txt";
//import _ from "lodash";
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

//console.log(_.join(['index', 'module', 'loader!'], ' '));
const button = document.createElement('button');
button.textContent = '点击执行加分运算';
//3、import 模块化机制可以实现代码分离
button.addEventListener('click', () => {
  import(/* webpackChunkName: 'math',webpackPrefetch: true*/'./math.js').then(({add})=> {
    console.log(add(1, 2))
  })
})
document.body.appendChild(button)