const btn = document.getElementById("btn")
const colorText = document.getElementById("colorText")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randomIndex(){
    let randInd = Math.floor(Math.random()*16)
    console.log(hex[randInd])
    return hex[randInd]
}

btn.addEventListener('click',function(){
    let hexColor = '#'
    for(let i=1;i<=6;i++){
        hexColor+=randomIndex()
    }

    colorText.innerHTML = hexColor;
    wrap.style.backgroundColor = hexColor;
})