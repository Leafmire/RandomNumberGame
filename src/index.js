// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const sliderRange = document.querySelector(".js-slider");
const maxNumView = document.querySelector(".js-maxNum");
const guessNum = document.querySelector(".js-guessNum");
const comNum = document.querySelector(".js-comNum");
const result = document.querySelector(".js-result");
const submitCount = document.querySelector(".js-submitCount");
const playBtn = document.querySelector(".playBtn");
let count = 0;

let maxNum = sliderRange.value;
let MAXNUM_LS = "storedNum";

maxNumView.innerHTML = `Generate a number between 0 and ${maxNum}`;

function changeMaxNum(e) {
  playBtn.disabled = false;
  let maxNum = sliderRange.value;
  localStorage.setItem(MAXNUM_LS, maxNum);
  maxNumView.innerHTML = `Generate a number between 0 and ${maxNum}`;
  count = 0;
}

function showResult(sVal) {
  sVal.preventDefault();
  const storedNum = localStorage.getItem(MAXNUM_LS);
  const myNum = guessNum.querySelector(".js-myNum");
  const YOU = parseInt(myNum.value, 10);
  const ME = Math.round(Math.random() * storedNum);

  if (YOU > parseInt(storedNum, 10)) {
    comNum.innerHTML = "You are an idiot!";
  } else {
    comNum.innerHTML = `You chose: ${YOU}, the machine chose: ${ME}.`;
  }

  if (YOU === ME) {
    result.innerHTML = "You won!";
    playBtn.disabled = true;
  } else {
    result.innerHTML = "You lost!";
  }
  count = count + 1;
  submitCount.innerHTML = `Try count: ${count}`;
}

sliderRange.addEventListener("input", changeMaxNum);

guessNum.addEventListener("submit", showResult);

function restoreNum() {
  localStorage.removeItem(MAXNUM_LS);
}
restoreNum();
