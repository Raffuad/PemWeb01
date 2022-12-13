// menangkap semua  elemen
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerChoice
    a.addEventListener("click",(element) =>{
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung nilai dari hasil game
    let pilihanComputer= document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    //jika pilihan komputer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }
    // jika pilihan user yang menang
    else if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanUser == "Papper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissor" && pilihanComputer == "Papper") {
        alert("YOU WIN");
    }

    // jika komputer yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Papper") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Papper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }
}