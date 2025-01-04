let boxes = document.querySelectorAll(".box");
let playBtn = document.getElementById("btn");
let msg = document.querySelector("#winner");
let msgContainer = document.querySelector(".msgContainer");
let currentPlayer = "x";
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      console.log(currentPlayer);
      if (currentPlayer === "x") {
        box.innerText = "x";
        box.classList.add("x");
        box.classList.remove("o");
        currentPlayer = "o";
        box.style.backgroundColor = "#ADA0A6";
      } else {
        box.innerText = "o";
        box.classList.add("o");
        currentPlayer = "x";
        box.classList.remove("x");

        box.style.backgroundColor = "#ADA0A6";
      }
    }
    checkWinner();
    // draw();
  });
});

let disabledBox = () => {
  boxes.forEach((box) => {
    box.classList.add("disabled");
  });
};

checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0] ,pattern[1])
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
        return;
      }
    }
  
  }

let isBoardFull = true;
boxes.forEach((box) => {
  if (box.innerText === "") {
    isBoardFull = false; // There's at least one empty spot
  }
});

if (isBoardFull) {
  showDraw();
}
};

playBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = " ";
    box.style.backgroundColor = "";
    box.classList.remove("disabled");
    msgContainer.classList.add("hide");
    currentPlayer = "x";
  });
});
const showWinner = (winner) => {
  msg.innerText = `Congrats 🎉!! Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disabledBox();
};

const showDraw = () => {
  msg.innerText = "It's a Draw! 😕";
  msgContainer.classList.remove("hide");
  disabledBox();
};
