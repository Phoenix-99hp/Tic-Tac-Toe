const cells = document.querySelectorAll("td");
const startBtn = document.getElementById("startBtn");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const col1 = document.querySelectorAll(".col1");
const col2 = document.querySelectorAll(".col2");
const col3 = document.querySelectorAll(".col3");
const diag1 = document.querySelectorAll(".diag1");
const diag2 = document.querySelectorAll(".diag2");
const toast = document.getElementById("toast");

startBtn.addEventListener("click", (e) => {
    player1.turn = true;
    startBtn.disabled = true;
});

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        if ((player1.turn) && (startBtn.disabled = true) && (e.currentTarget.innerText !== "O") && (e.currentTarget.innerText !== "X")) {
            e.currentTarget.innerText = "X";
            player1.turn = false;
            player1.checkWin();
        }
        else if ((player2.turn) && (startBtn.disabled = true) && (e.currentTarget.innerText !== "O") && (e.currentTarget.innerText !== "X")) {
            e.currentTarget.innerText = "O";
            player2.turn = false;
            player2.checkWin();
        }
    });
});

const player1 = {
    turn: false,
    won: false,
    checkWin: function () {
        let col1s = [];
        let col2s = [];
        let col3s = [];
        let diag1s = [];
        let diag2s = [];
        col1.forEach(col => {
            col1s.push(col.innerText);
        });
        col2.forEach(col => {
            col2s.push(col.innerText);
        });
        col3.forEach(col => {
            col3s.push(col.innerText);
        });
        diag1.forEach(diag => {
            diag1s.push(diag.innerText);
        });
        diag2.forEach(diag => {
            diag2s.push(diag.innerText);
        });
        if (row3.children[0].innerText === "X" && row3.children[1].innerText === "X" && row3.children[2].innerText === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (row2.children[0].innerText === "X" && row2.children[1].innerText === "X" && row2.children[2].innerText === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (row1.children[0].innerText === "X" && row1.children[1].innerText === "X" && row1.children[2].innerText === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (col1s[0] === "X" && col1s[1] === "X" && col1s[2] === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (col2s[0] === "X" && col2s[1] === "X" && col2s[2] === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (col3s[0] === "X" && col3s[1] === "X" && col3s[2] === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (diag1s[0] === "X" && diag1s[1] === "X" && diag1s[2] === "X") {
            player1.won = true;
            this.celebrate();
        }
        else if (diag2s[0] === "X" && diag2s[1] === "X" && diag2s[2] === "X") {
            player1.won = true;
            this.celebrate();
        }
        else (player2.turn = true);
    },
    celebrate: function () {
        if (this.won = true) {
            toast.classList.add("show");
            toast.innerText = "X's Win!"
        }
        setTimeout(function clearBoard() {
            startBtn.disabled = false;
            this.won = false;
            this.turn = false;
            player2.turn = false;
            toast.classList.remove("show");
            cells.forEach(cell => {
                cell.innerText = "";
            })
        }, 2000);
    }
}

const player2 = {
    turn: false,
    won: false,
    checkWin: function () {
        let col1s = [];
        let col2s = [];
        let col3s = [];
        let diag1s = [];
        let diag2s = [];
        col1.forEach(col => {
            col1s.push(col.innerText);
        });
        col2.forEach(col => {
            col2s.push(col.innerText);
        });
        col3.forEach(col => {
            col3s.push(col.innerText);
        });
        diag1.forEach(diag => {
            diag1s.push(diag.innerText);
        });
        diag2.forEach(diag => {
            diag2s.push(diag.innerText);
        });
        if (row3.children[0].innerText === "O" && row3.children[1].innerText === "O" && row3.children[2].innerText === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (row2.children[0].innerText === "O" && row2.children[1].innerText === "O" && row2.children[2].innerText === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (row1.children[0].innerText === "O" && row1.children[1].innerText === "O" && row1.children[2].innerText === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (col1s[0] === "O" && col1s[1] === "O" && col1s[2] === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (col2s[0] === "O" && col2s[1] === "O" && col2s[2] === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (col3s[0] === "O" && col3s[1] === "O" && col3s[2] === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (diag1s[0] === "O" && diag1s[1] === "O" && diag1s[2] === "O") {
            player2.won = true;
            this.celebrate();
        }
        else if (diag2s[0] === "O" && diag2s[1] === "O" && diag2s[2] === "O") {
            player2.won = true;
            this.celebrate();
        }
        else (player1.turn = true);
    },
    celebrate: function () {
        if (this.won = true) {
            toast.classList.add("show");
            toast.innerText = "O's Win!"
        }
        setTimeout(function clearBoard() {
            startBtn.disabled = false;
            this.won = false;
            this.turn = false;
            player2.turn = false;
            toast.classList.remove("show");
            cells.forEach(cell => {
                cell.innerText = "";
            })
        }, 2000);
    }
}