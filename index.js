// date element selector
let date = document.getElementById("date");
const celdate = "26 Jan 2025 05:00 PM"
date.innerText = celdate;

// all input selector 
const inputs = document.querySelectorAll("input");
const clock = () => {
    const end = new Date(celdate);
    const now = new Date();
    // converted ms into s
    const diff = (end-now)/1000;
    if(diff < 0) {
        return;
    }
    // sec convert into days
    const days = Math.floor(diff/(24*60*60));
    inputs[0].value = days;
    // converted sec into hours
    const hours = Math.floor((diff / (60*60)) % 24);
    inputs[1].value = hours;
    // converted sec into mins
    const mins = Math.floor((diff / 60) % 60);
    inputs[2].value = mins;
    // converted sec into sec 
    const secs = Math.floor(diff % 60 );
    inputs[3].value = secs;
    
}
// function call;
setInterval(
    () => {
        clock();
    },1000
)