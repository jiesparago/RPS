
let Rps = ["ROCK", "PAPER", "SCISSORS"];
let newBotscore = 0;
let newPlayerscore = 0;
      const btnRoll = document.querySelectorAll("input");
      let player1;
      console.log(Rps);
      btnRoll.forEach((btnRoll) =>
        btnRoll.addEventListener("click", (a) => {
          player1 = a.target.value;
          console.log(player1);
          Roll();
        })
      );
      function Roll() {
        let computer1 = Rps[Math.floor(Math.random() * 3)];
        let list = document.getElementById("matchHistory");
        let li = document.createElement("li");
        if (player1 == "ROCK") {
          if (computer1 == "ROCK") {
            li.textContent = "Rock Vs. Rock. Draw. Try Again";
            list.appendChild(li);
          } else if (computer1 === "PAPER") {
            li.textContent = "Rock Vs. Paper. Computer Wins";
            li.style.color = "red";
            list.appendChild(li);
          } else if (computer1 === "SCISSORS") {
            li.textContent = "Rock  Vs. Scissors. Player 1 Wins";
            li.style.color = "green";
            list.appendChild(li);
          }
        } else if (player1 == "PAPER") {
          if (computer1 == "PAPER") {
            li.textContent = "Paper  Vs. Paper. Draw. Try Again";
            list.appendChild(li);
          } else if (computer1 == "SCISSORS") {
            li.textContent = "Paper  Vs. Scissors. Computer Wins";
            li.style.color = "red";
            list.appendChild(li);
          } else if (computer1 == "ROCK") {
            li.textContent = "Paper  Vs. Rock. Player 1 Wins";
            li.style.color = "green";
            list.appendChild(li);
          }
        } else if (player1 == "SCISSORS") {
          if (computer1 == "SCISSORS") {
          
            li.textContent = "Scissors  Vs. Scissors. Draw. Try Again";
            list.appendChild(li);
          } else if (computer1 == "PAPER") {
           
            li.textContent = "Scissors  Vs. Paper. Player 1 Wins";
            li.style.color = "green";
            list.appendChild(li);
          } else if (computer1 == "ROCK"){
          
            li.textContent = "Scissors  Vs. Rock. Computer Wins";
            li.style.color = "red";
            list.appendChild(li);
        }
        }
       
      }