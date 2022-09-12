let counterValue = 0;

const displayTotal = document.querySelector("#value");
const buttonDown = document.querySelector('button[data-action="decrement"]');
const buttonUp = document.querySelector('button[data-action="increment"]');

buttonDown.addEventListener("click", () => {
    counterValue--;
    displayTotal.textContent = counterValue;
});

buttonUp.addEventListener("click", () => {
    counterValue++;
    // counterValue += 10;
    displayTotal.textContent = counterValue;
});
