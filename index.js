
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const gridSize = document.getElementById('gridsize');
const sizeSlider = document.getElementById('sizePicker');
const grid = document.getElementsByClassName('gridContainer');

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
console.log(sizePicker.value);
createGrid(16)
function createGrid(size){
  let board = document.querySelector('.gridContainer');
board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
board.style.gridTemplateRows =`repeat(${size}, 1fr)`;

for(i=1;i<=(size*size);i++){
  let square = document.createElement('div');
  square.classList.add('squares')
  board.insertAdjacentElement("beforeend",square);
}
}