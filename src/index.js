// https://webpack.github.io/docs/hot-module-replacement-with-webpack.html#what-is-needed-to-use-it
if(module.hot) module.hot.accept();

require('./index.html');
require('./styles.css');

// generates random colors
import Please from 'pleasejs';

const title = document.getElementById('title');
const color = document.getElementById('color');
const button = document.getElementById('colorButton');
const changeColor = ()=>{
  title.style.color = Please.make_color();
  color.innerText = title.style.color;
};

color.innerText = window.getComputedStyle(title, null).color;

button.addEventListener('click', changeColor);