/* variáveis */
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let xAttempts = 1;

/* eventos */
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  } else {
    handleTryClick();
  }
});

/* funções */

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if(inputNumber.value === ''){
    console.log('não executei tudo...')
    return '';
  }

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Apenas números entre 0 e 10");
  } else {
    if (Number(inputNumber.value) === randomNumber) {
      toggleScreen();

      screen2.querySelector("h2").innerText =
        "acertou em " + xAttempts + " tentativa(s)";
    }
  }

  inputNumber.value = "";

  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  console.clear();
  randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber);
  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
