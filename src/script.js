const btn = document.querySelector(".generate");
const color = document.querySelector(".color");
const background = document.querySelector("body");

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color.innerHTML = "#" + randomColor;
  background.style.backgroundColor = color.innerHTML;
  console.log(randomColor);
};

btn.addEventListener("click", generateRandomColor);
