let arr = ["The only limit to our realization of tomorrow is our doubts of today.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Life is what happens when you're busy making other plans.",
            "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            "In the middle of every difficulty lies opportunity.",
            "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
            "You miss 100% of the shots you don’t take.",
            "The best way to predict the future is to create it.",
            "It always seems impossible until it’s done.",
            "Happiness is not something ready-made. It comes from your own actions."]

var set1 = new Set();
function generateQuote(){
    if(set1.size >= arr.length) set1.clear();
    while(true){
        let randomNum = Math.floor(Math.random()*arr.length);
        if(set1.has(randomNum)) continue;

        set1.add(randomNum);
        document.getElementById('showArea').innerHTML = arr[randomNum];
        break;
    }
}

