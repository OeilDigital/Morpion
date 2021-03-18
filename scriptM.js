var zone = document.querySelectorAll("div button");

function aleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

var z1 = document.getElementById("zone1");
var z2 = document.getElementById("zone2");
var z3 = document.getElementById("zone3");
var z4 = document.getElementById("zone4");
var z5 = document.getElementById("zone5");
var z6 = document.getElementById("zone6");
var z7 = document.getElementById("zone7");
var z8 = document.getElementById("zone8");
var z9 = document.getElementById("zone9");

function winner(){
    if((z1.innerHTML === "X" && z2.innerHTML === "X" && z3.innerHTML === "X") ||
        (z4.innerHTML === "X" && z5.innerHTML === "X" && z6.innerHTML === "X") ||
        (z7.innerHTML === "X" && z8.innerHTML === "X" && z9.innerHTML === "X") ||
        (z1.innerHTML === "X" && z4.innerHTML === "X" && z7.innerHTML === "X") ||
        (z2.innerHTML === "X" && z5.innerHTML === "X" && z8.innerHTML === "X") ||
        (z3.innerHTML === "X" && z6.innerHTML === "X" && z9.innerHTML === "X") ||
        (z1.innerHTML === "X" && z5.innerHTML === "X" && z9.innerHTML === "X") ||
        (z3.innerHTML === "X" && z5.innerHTML === "X" && z7.innerHTML === "X")){
        document.getElementById("result").innerHTML = "Gagné!";
        }else if((z1.innerHTML === "O" && z2.innerHTML === "O" && z3.innerHTML === "O") ||
        (z4.innerHTML === "O" && z5.innerHTML === "O" && z6.innerHTML === "O") ||
        (z7.innerHTML === "O" && z8.innerHTML === "O" && z9.innerHTML === "O") ||
        (z1.innerHTML === "O" && z4.innerHTML === "O" && z7.innerHTML === "O") ||
        (z2.innerHTML === "O" && z5.innerHTML === "O" && z8.innerHTML === "O") ||
        (z3.innerHTML === "O" && z6.innerHTML === "O" && z9.innerHTML === "O") ||
        (z1.innerHTML === "O" && z5.innerHTML === "O" && z9.innerHTML === "O") ||
        (z3.innerHTML === "O" && z5.innerHTML === "O" && z7.innerHTML === "O")){
        document.getElementById("result").innerHTML = "Les morpions t'ont botté les fesses !!!";
        }else if (z1.innerHTML.length == 1 && z2.innerHTML.length == 1 && z3.innerHTML.length == 1
            && z4.innerHTML.length == 1 && z5.innerHTML.length == 1 && z6.innerHTML.length == 1
            && z7.innerHTML.length == 1 && z8.innerHTML.length == 1 && z9.innerHTML.length == 1
            && document.getElementById("result").innerHTML.length === 0){
            document.getElementById("result").innerHTML = "Incroyable! C'est une égalité parfaite!";
            }
}



for(let i = 0; i<zone.length; i++) {
    zone[i].addEventListener("click",changeColor);
    function changeColor() {
    this.style.backgroundColor = "green";
    this.innerHTML = "X";
    this.disabled = true;
        function computPlay(){
            let c = aleatoire(0,8);
            if(zone[c].innerHTML.length === 0){
                zone[c].style.backgroundColor = "red";
                zone[c].innerHTML = "O";
                zone[c].disabled = true;
                winner();
            }else{
                (computPlay())();
            }
            
        }
    winner();
    setTimeout(computPlay, 800);
    }
}
