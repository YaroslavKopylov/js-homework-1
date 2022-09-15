const inputScroll = document.querySelector("input#font-size-control");
const abracadabra = document.querySelector("span#text");

inputScroll.addEventListener("input", (e) => {
    abracadabra.style.fontSize = `${e.target.value}px`;
});
