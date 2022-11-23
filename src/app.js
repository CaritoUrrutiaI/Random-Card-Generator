/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let symbol = ["♣", "♠", "♥", "♦"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let symbolRandom = Math.floor(Math.random() * symbol.length);
  let numbersRandom = Math.floor(Math.random() * numbers.length);

  let topSuit = document.getElementsByClassName("top-suit")[0];
  let card = document.getElementsByClassName("number")[0];
  let bottomSuit = document.getElementsByClassName("bottom-suit")[0];

  topSuit.innerHTML = symbol[symbolRandom];
  card.innerHTML = numbers[numbersRandom];
  bottomSuit.innerHTML = symbol[symbolRandom];

  if (symbolRandom === 2 || symbolRandom === 3) {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    card.style.color = "red";
  }
};
