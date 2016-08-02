// https://webpack.github.io/docs/hot-module-replacement-with-webpack.html#what-is-needed-to-use-it
if(module.hot) module.hot.accept();

require('./index.html');
require('./styles.css');

// generates random color
var Please = require('pleasejs');
var title = document.getElementById('title');
var color = document.getElementById('color');
var button = document.getElementById('colorButton');

color.innerText = window.getComputedStyle(title, null).color;

button.addEventListener('click', changeColor);

function changeColor(){
  title.style.color = Please.make_color();
  color.innerText = title.style.color;
}
