let willAdd = document.getElementById("newItem")
let add = document.getElementById("add")
let addSpace = document.getElementById("items")
let todo =[]
window.onload=()=>{
    todo = JSON.parse(localStorage.getItem('todos')) || []
    todo.forEach((data)=>display(data))
}

add.addEventListener('click',()=>{
    todo.push(willAdd.value)
    // console.log(todo)
    localStorage.setItem('todos',JSON.stringify(todo))
    display(willAdd.value)
    willAdd.value = ''
})

function display(todoData){
    let para = document.createElement('p')
    para.innerText = todoData;
    addSpace.appendChild(para);
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todoData)
    })
    para.addEventListener('dblclick',()=>{
        addSpace.removeChild(para)
        remove(todoData)
    })
}

function remove(data){
    let index = todo.indexOf(data);
    if(index>-1){
    todo.splice(index,1);
    }
    localStorage.setItem('todos',JSON.stringify(todo))
}