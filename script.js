const main = document.querySelector("main");
const chevron = document.querySelector("img");

chevron.addEventListener("click", () => {
  main.scrollIntoView({ behavior: "smooth" });
});
