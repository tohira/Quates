const id = document.querySelector("span");
const h1 = document.querySelector("h1");
const img = document.querySelector(".img-card");
const author = document.querySelector(".author");

async function dummyjson() {
  const quate = await fetch("https://dummyjson.com/quotes/random");
  const data = await quate.json();
  upDateUi(data);
}

function upDateUi(quote) {
  id.textContent = `quote#${quote.id}`;
  h1.textContent = quote.quote;
  author.textContent = quote.author;
}
dummyjson();

img.addEventListener("click", () => {
  dummyjson();
});
