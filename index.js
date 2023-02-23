//GO UP BUTTON
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

//HAMBURGUER MENU

const burguer = document.getElementById("burguer");
const navLinks = document.getElementById("navLinks");

burguer.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//PROGRESS BAR

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

//FORM VALIDATION AND FETCH

const nameValue = document.getElementById("nameValue");
const mail = document.getElementById("mail");
const consent = document.getElementById("consent");
const form = document.getElementById("form");
let nameOK = "";
const url = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValueLength = e.target.nameValue.value.length;
  const mailValue = e.target.mail.value;
  const checked = e.target.consent.checked;
  const expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (
    checked === true &&
    expReg.test(mailValue) &&
    (nameValueLength >= 1 || nameValueLength <= 100)
  ) {
    nameOK = e.target.nameValue.value;
    sendUser(url, nameOK, mailValue);
  }

  if (nameValueLength <= 1 || nameValueLength >= 100) {
    document.getElementById("nameValue").style.borderStyle = "solid";
    document.getElementById("nameValue").style.borderColor = "red";
  }

  if (!expReg.test(mailValue)) {
    document.getElementById("mail").style.borderStyle = "solid";
    document.getElementById("mail").style.borderColor = "red";
  }

  if (checked === false) {
    document.getElementById("consent").style.outline = "2px solid #c00";
  }
});

function sendUser(url, nameOK, mailOK) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: nameOK,
      email: mailOK,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//MODAL
