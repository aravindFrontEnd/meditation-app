
const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breath In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breathe Out!";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
    // breath time 3secs [hold till 3s]
}


// run this evey 7.5 secs 
setInterval(breathAnimation,totalTime); 