const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const connect = document.querySelector("#ingredients");
const liArray = [];
ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.className = "item";
    item.textContent = ingredient;
    liArray.push(item);
});

connect.append(...liArray);

// let array = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
// ];
// let size = 1;
// let newArr = [];
// for (let i = 0; i < array.length; i += 1) {
//     newArr[i] = array.slice(i * size, i * size + size);
// }
// console.log(newArr);
