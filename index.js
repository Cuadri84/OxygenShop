//GO UP BUTTON------------------------------------------------

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

//HAMBURGUER MENU----------------------------------------------

const burguer = document.getElementById("burguer");
const navLinks = document.getElementById("navLinks");

burguer.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//PROGRESS BAR---------------------------------------------------

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

//FORM VALIDATION AND FETCH-----------------------------------------

const nameValue = document.getElementById("nameValue");
const mail = document.getElementById("mail");
const consent = document.getElementById("consent");
const form = document.getElementById("form");
let nameOK = "";
const url = "https://jsonplaceholder.typicode.com/posts";
const expReg =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValueLength = e.target.nameValue.value.length;
  const mailValue = e.target.mail.value;
  const checked = e.target.consent.checked;

  if (
    checked === true &&
    expReg.test(mailValue) &&
    (nameValueLength >= 1 || nameValueLength <= 100)
  ) {
    nameOK = e.target.nameValue.value;
    sendUser(url, nameOK, mailValue);
  }

  if (nameValueLength <= 1 || nameValueLength >= 100) {
    nameValue.style.borderStyle = "solid";
    nameValue.style.borderColor = "red";
  }

  if (!expReg.test(mailValue)) {
    mail.style.borderStyle = "solid";
    mail.style.borderColor = "red";
  }

  if (checked === false) {
    consent.style.outline = "2px solid #c00";
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

//MODAL----------------------------------------------------------------------

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const x = document.getElementById("closeModal");

//modal open

window.onload = () => {
  if (!localStorage.getItem("close")) {
    setTimeout(showPopup, 4000);
  }
};

const showPopup = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};

//modal close

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  localStorage.close = "closed";
};

let close = "closed";

x.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal;
  }
});

//modal form

const modalMail = document.getElementById("modal-mail");
const modalForm = document.getElementById("modal-form");
const newsletterUser = "Newsletter User";

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modalMailValue = e.target.modalMail.value;

  expReg.test(modalMailValue)
    ? sendUser(url, newsletterUser, modalMailValue)
    : (modalMail.style.borderColor = "red");
});

//CURRENCY EXCHANGE------------------------------------------------------------

const apiCurrency = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`;

const getCurrency = async () => {
  const response = await fetch(apiCurrency);
  let data = await response.json();
  return data;
};

const select = document.getElementById("selector");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const premium = document.getElementById("premium");

getCurrency().then((data) => {
  select.addEventListener("change", (e) => {
    if (e.target.value == "usd") {
      basic.textContent = "$0";
      pro.textContent = "$" + Math.round(parseFloat(25 * data.eur.usd));
      premium.textContent = "$" + parseFloat(60 * data.eur.usd).toFixed(0);
    }
    if (e.target.value == "gbp") {
      basic.textContent = "£0";
      pro.textContent = "£" + Math.round(parseFloat(25 * data.eur.gbp));
      premium.textContent = "£" + parseFloat(60 * data.eur.gbp).toFixed(0);
    }
    if (e.target.value == "eur") {
      basic.textContent = "€0";
      pro.textContent = "€25";
      premium.textContent = "€60";
    }
  });
});
//TODO ponerle catch?

//SLIDER---------------------------------------------------------------------

const images = [
  "assets/slider/neon.jpg",
  "assets/slider/bakery.jpg",
  "assets/slider/hop.jpg",
];

let image = document.getElementById("image");
image.src = images[0];

let arrowRight = document.getElementById("right");
let arrowLeft = document.getElementById("left");
let index = 0;
const dots = document.querySelectorAll("span");

//arrows

function slideRight() {
  startInterval();
  const oldIndex = index;
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  document.image.src = images[index];

  dots[index].style.background = "white";
  dots[oldIndex].style.background = "transparent";
}
function slideLeft() {
  startInterval();
  const oldIndex = index;
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  document.image.src = images[index];

  dots[index].style.background = "white";
  dots[oldIndex].style.background = "transparent";
}

//infinite slide
let interval = null;
function startInterval() {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    slideRight();
  }, 3000);
}

startInterval();

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);

//dots
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");

dot1.addEventListener("click", () => {
  document.image.src = images[0];
  startInterval();
  dot1.style.background = "white";
  dot2.style.background = "transparent";
  dot3.style.background = "transparent";
});
dot2.addEventListener("click", () => {
  document.image.src = images[1];
  startInterval();
  dot1.style.background = "transparent";
  dot2.style.background = "white";
  dot3.style.background = "transparent";
});
dot3.addEventListener("click", () => {
  document.image.src = images[2];
  startInterval();
  dot1.style.background = "transparent";
  dot2.style.background = "transparent";
  dot3.style.background = "white";
});
