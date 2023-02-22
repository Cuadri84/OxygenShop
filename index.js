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

//progress bar
document.addEventListener("DOMContentLoaded", () => {
  const coloredBar = document.getElementById("coloredBar");

  window.addEventListener(
    "scroll",
    (calculatePercentage = () => {
      let h = document.documentElement;

      let st = h.scrollTop;
      let sh = h.scrollHeight;
      let ch = h.clientHeight;

      let percent = Math.round((st / (sh - ch)) * 100);

      coloredBar.style.width = percent + "%";
    })
  );
});

//form validation
const nameValue = document.getElementById("nameValue");
const mail = document.getElementById("mail");
const consent = document.getElementById("consent");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValueLength = e.target.nameValue.value.length;
  const mailValue = e.target.mail.value;
  const expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (nameValueLength <= 1 || nameValueLength >= 100) {
    document.getElementById("nameValue").style.borderStyle = "solid";
    document.getElementById("nameValue").style.borderColor = "red";
  }
  if (expReg.test(mailValue)) {
    console.log("correcto");
  } else {
    document.getElementById("mail").style.borderStyle = "solid";
    document.getElementById("mail").style.borderColor = "red";
  }
});
