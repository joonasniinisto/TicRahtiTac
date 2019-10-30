import "./styles.css";
import { type } from "os";
var kierros = 0;
var width = 0;
var VarTimeout;
var time = (document.getElementById("board").innerHTML = `
<h1>Tic Tac Toe</h1>
`);

var table = document.getElementById("t01");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function() {
        //resetTimeOut();
        //VarTimeout = setTimeout(timeOutAlert, 10000);
        tableText(this);
        checkWinnerHorisontal(table);
        checkWinnerVertical(table);
        checkWinnerDiagonal(table);
      };
  }
}

function tableText(tableCell) {
  var vaaka = tableCell.parentElement.rowIndex;
  var pysty = tableCell.cellIndex;

  timerii();
  timeri2();
  timer++;

  console.log(vaaka + "testi" + pysty);

  if (kierros % 2 === 0) {
    tableCell.innerHTML = "X";
    tableCell.style.backgroundColor = "rgb(124, 252, 0)";
    tableCell.style.fontSize = "30px";
    tableCell.style.fontFamily = "Helvetica";

    kierros++;
  } else {
    tableCell.innerHTML = "O";
    tableCell.style.backgroundColor = "rgb(250, 128, 114)";
    tableCell.style.fontSize = "30px";
    tableCell.style.fontFamily = "Helvetica";

    kierros++;
  }
  //alert(tableCell.innerHTML);
}

function checkWinnerHorisontal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[i].cells[j].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[i].cells[j].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerVertical(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[j].cells[i].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[j].cells[i].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerDiagonal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[i].innerHTML === "O") {
      lkmo++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }

  lkmx = 0;
  lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[4 - i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[4 - i].innerHTML === "O") {
      lkmo++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }
}

function timeri2() {
  if (timer == 0) {
    var myVar = setInterval(move, 10);
  }
}

function timeOutAlert() {
  alert("Timeout");
  width = 0;
  kierros++;
}

function resetTimeOut() {
  clearTimeout(VarTimeout);
  width = 0;
}

function resetBar() {
  var elem = document.getElementById("myBar");
  elem.style.width = width + "%";
}

function move() {
  var elem = document.getElementById("myBar");
  width++;

  var widthpros = (width / 1000) * 100;
  elem.style.width = widthpros + "%";
  //elem.innerHTML = width * 1 + "/10";
}

var aloitus = "";
var min = 0;
var sec = 0;
var hour = 0;
var timer = 0;

function timerii() {
  if (timer == 0) {
    var myVar = setInterval(myTimer, 1000);
  }
}

function myTimer() {
  if (aloitus === "") {
    aloitus = new Date();
    console.log(aloitus);
  }

  if (sec < 59) {
    sec++;
  } else if (sec === 59) {
    sec = 0;
    min++;
  } else if (min === 60) {
    sec = 0;
    min = 0;
    hour++;
  }

  document.getElementById("demo").innerHTML =
    hour + "h " + min + "min " + sec + "sec";
}
