//GO Up Button
const goUpWithTimer = () => {
  setTimeout(goUp, 200);
};

const upButton = document
  .getElementById("upButton")
  .addEventListener("click", goUpWithTimer);

const goUp = () => {
  document.documentElement.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

//hamburguer menu

const burguer = document.getElementById("burguer");
const navLinks = document.getElementById("navLinks");

burguer.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
