let counter = 0;
let sessionCount = 0;


function incrementCounter(){
    counter += 1;
    document.getElementById("counter").innerText = counter; 
}

let sessionCountText = document.getElementById("sessionvalues"); 


function saveCounter(){
    if(!sessionCount)
        sessionCountText.textContent += counter; 
    else
        sessionCountText.textContent += " - " + counter;
    console.log("Session value: " + counter);
    counter = 0;
    document.getElementById("counter").innerText = counter; 
    sessionCount = 1;
}


 

