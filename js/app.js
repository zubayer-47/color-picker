// const colors = [
// 	"green",
// 	"red",
// 	"blue",
// 	"#eeeeee",
// 	"orange",
//       'tomato',
// 	"#ddd",
// 	"#efefef",
// ];

// const body = document.querySelector("body");
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");
// const h3 = document.querySelector(".wrapper h3");

// btn.addEventListener("click", function () {
// 	let randNumber = colors[getRandNumber()];
// 	color.textContent = randNumber;

// 	body.style.backgroundColor = randNumber;

// 	console.log(randNumber);
// });

// function getRandNumber() {
// 	return Math.floor(Math.random() * colors.length);
// }



const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	let hexColor = "#";
	for (let i = 0; i < 3; i++) {
		hexColor += hex[getRandomNumber()];
	}
	console.log(hexColor)

	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
