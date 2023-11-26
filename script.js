

    {
        let start = document.getElementById("startBtn");
        let back1 = document.getElementById("goHome");
        let homePage = document.getElementById("container1");
        let gamePage = document.getElementById("container3");
      
        start.addEventListener("click", (e) => {
          homePage.setAttribute("style", "display: none");
          gamePage.removeAttribute("style", "display: none");
        });
        back1.addEventListener("click", (e) => {
          gamePage.setAttribute("style", "display: none");
          homePage.removeAttribute("style", "display: none");
        });
      }
      //sets up gameboard and controller //
      let gamePiece = "X";
      let counter = 0;
      let gameBoardDisplay = document.querySelector("#gameBoard");
      let gameBoardCells = ["", "", "", "", "", "", "", "", ""];
      let clickArea = document.getElementById("container3");
      
      function makeBoard() {
        gameBoardCells.forEach((e, index) => {
          const box = document.createElement("div");
          box.classList.add("box");
          box.id = index;
          gameBoardDisplay.append(box);
        });
      }
      makeBoard();
      
      function fillBox(e) {
        let place = e.target.id;
        gameBoardCells.splice(place, 1, gamePiece);
        counter++;
        let marker = document.createElement("div");
        e.target.append(marker);
        marker.classList.add("icon");
        marker.innerText = gamePiece;
        gamePiece = gamePiece === "X" ? "O" : "X";
        winnerCheck();
      }
      gameBoardDisplay.addEventListener("click", fillBox);
      
      function winnerCheck() {
        let gameOver = document.getElementById("4")
        //winning combos//
        let one = gameBoardCells[0] + gameBoardCells[1] + gameBoardCells[2];
        let two = gameBoardCells[3] + gameBoardCells[4] + gameBoardCells[5];
        let three = gameBoardCells[6] + gameBoardCells[7] + gameBoardCells[8];
        let four = gameBoardCells[0] + gameBoardCells[3] + gameBoardCells[6];
        let five = gameBoardCells[1] + gameBoardCells[4] + gameBoardCells[7];
        let six = gameBoardCells[2] + gameBoardCells[5] + gameBoardCells[8];
        let seven = gameBoardCells[0] + gameBoardCells[4] + gameBoardCells[8];
        let eight = gameBoardCells[2] + gameBoardCells[4] + gameBoardCells[6];
      
        if (one === "XXX" || one === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText = (gameBoardCells[0] + " " + "Wins");

        }
        if (two === "XXX" || two === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[3] + " " + "Wins");
        }
        if (three === "XXX" || three === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[6] + " " + "Wins");
        }
        if (four === "XXX" || four === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[0] + " " + "Wins");
        }
        if (five === "XXX" || five === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[1] + " " + "Wins");
        }
        if (six === "XXX" || six === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[2] + " " + "Wins");
        }
        if (seven === "XXX" || seven === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[0] + " " + "Wins");
        }
        if (eight === "XXX" || eight === "OOO") {
          gameBoardDisplay.removeEventListener("click", fillBox);
          gameOver.classList.add("gameOver");
          gameOver.innerText =(gameBoardCells[2] + " " + "Wins");
        }
        if (counter === 9){
            gameOver.classList.add("gameOver");
            gameOver.innerText = "It's a Tie";

        }
      }
      let reset = document.getElementById("reset");
      
      reset.addEventListener("click", (e) => {
        gameBoardDisplay.innerHTML = "";
        gameBoardCells = ["", "", "", "", "", "", "", "", ""];
        makeBoard();
        gameBoardDisplay.addEventListener("click", fillBox);
        gamePiece = "X";
        counter = 0;
      });
      