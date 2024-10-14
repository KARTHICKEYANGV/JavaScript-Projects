let displaySpace = document.getElementById('textList');
let inputData = document.getElementById('inputText');
let items = [];
let displayArea = document.getElementById("textList");
let storageKey = "items"

function renderData(){
    displayArea.innerHTML = null;
    for(const[idx,item] of Object.entries(items)){
        let span = document.createElement('span');
        span.textContent = item;
        span.style.marginRight = "10px";
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => deleteData(idx);
        let div = document.createElement("div");
        div.appendChild(span);
        div.appendChild(button);
        displayArea.appendChild(div);
        
    }

}

function addData(){
    let inputData = document.getElementById("inputText").value;
    if(inputData.length == 0){ 
        alert("Empty input is not accepted");
    return;
    }
    items.push(inputData);
    saveItem();
    renderData();
}

function deleteData(idx){
    items.splice(idx,1);
    renderData();
    saveItem();
}

function saveItem(){
    let stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey,stringItems);
}

function loadData(){
    const oldItems = localStorage.getItem(storageKey);
    if(oldItems) items = JSON.parse(oldItems)
    renderData();
}

document.addEventListener("DOMContentLoaded", loadData);

