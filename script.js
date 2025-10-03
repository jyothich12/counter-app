 let count = 0;
const increasecount = document.getElementById("count");

     function updateCounter(action){
        if(action === "increase") {
            count++;
        }else if(action === "decrease"){
            count--;
        }else if(action === "reset"){
            count = 0;
        }

        increasecount.textContent  = count;
     }
    document.getElementById("increase").addEventListener("click", () => updateCounter("increase"));
    document.getElementById("decrease").addEventListener("click", () => updateCounter("decrease"));
    document.getElementById("reset").addEventListener("click", () => updateCounter("reset"));
