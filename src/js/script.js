const newDiv = document.createElement('div');
const input = document.querySelector('.filters-panel__range-wrapper');

newDiv.style.width = '14px';
newDiv.style.height = '14px';
newDiv.style.backgroundColor = `#C05AFF`;
newDiv.style.position = 'absolute';
newDiv.style.top = '206px';
newDiv.style.left = '549px';
newDiv.style.borderRadius = '100%';




input.style.width = '189px'
input.style.value = '0'

input.appendChild(newDiv);
document.querySelector('#range').value = '0'
const h = document.querySelector('#range')

let offsetX, offsetY;
let inputValue = 100;

let isDragging = false;


newDiv.addEventListener('mousedown', function (e) {

    isDragging = true;

    offsetX = e.clientX;
   
    console.log(e.clientX, e.clientY)

    newDiv.style.cursor = 'pointer';
});

let q = 551;
console.log(window.innerWidth)
document.addEventListener('mousemove', function (e) {
    /* console.log((e.clientX / window.innerWidth * 100).toFixed(2)) */
    if (isDragging && (e.clientX <=551 && e.clientX >= 376)) {
        if (q - e.clientX >= 1.6) {
            q = e.clientX
            inputValue = inputValue - 1.15
        }

        if (q - e.clientX <= -1.6) {
            q = e.clientX
            inputValue = inputValue + 1.15
        }
        console.log(q, e.clientX)

        

        let x = e.clientX;

        newDiv.style.left = (x-4) + 'px';
        console.log(inputValue)
    }
});

document.addEventListener('mouseup', function () {

    isDragging = false;


    newDiv.style.cursor = 'pointer';
});

