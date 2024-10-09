const buttons = document.querySelectorAll('button');
const color = ['red','blue','green','orange'];
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const random = document.getElementById('random');
const body = document.getElementById('body')


buttons.forEach((button,index) => {
    button.style.backgroundColor = color[index];
})

red.onclick = function(){
    body.style.backgroundColor = 'red';
};

blue.onclick = function(){
    body.style.backgroundColor = 'blue';
};

green.onclick = function(){
    body.style.backgroundColor = 'green';
};

random.onclick = function(){
    let max = 4;
    let randomNum = Math.floor(Math.random() * max);
    body.style.backgroundColor = color[randomNum];
};
