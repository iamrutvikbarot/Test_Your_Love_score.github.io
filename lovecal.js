const boy = document.getElementById("Male");
const girl = document.getElementById("female");
const submit = document.getElementById("btn");

submit.onclick = function () {

    const b = boy.value;
    const g = girl.value;



    localStorage.setItem("Boy Name", b);
    localStorage.setItem("Girl Name", g);
    score();
    setTimeout(() => {
        location.reload()
    }, 5000);

   

}



function score() {
    const dBoy = localStorage.getItem("Boy Name");
    const dGirl = localStorage.getItem("Girl Name");

    var x = Math.random() * 100;

    var y = Math.floor(x) + 1;

    if (y > 80) {
        document.getElementById("results").innerHTML = "Mr. " + dBoy + " and mrs. " + dGirl + " Your Love Score is " + y + "%. and you Love each other like romeo and juliet";
    } if (y > 70) {
        document.getElementById("results").innerHTML = "Mr. " + dBoy + " and mrs. " + dGirl + " Your Love Score is " + y + "%. and you Love each other";
    } else {
        document.getElementById("results").innerHTML = "Mr. " + dBoy + " and mrs. " + dGirl + " Your Love Score is " + y + " %";
    }

}