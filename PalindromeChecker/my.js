function checkPalindrome(){
    console.log("Hi")
    let inputStr = document.getElementById('userInput').value;
    let n = inputStr.length;
    let str = "";
    for(let i = n-1; i>=0; i--){
        str += inputStr.charAt(i); 
    }
    if(str == inputStr) document.getElementById('result').innerHTML = "True";
    else{
    document.getElementById('result').innerHTML = "False";
    }
}