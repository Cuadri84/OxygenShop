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
  setTimeout(showPopup, 4000);
};

const showPopup = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};

//modal close

x.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
});

//modal form
const modalMail = document.getElementById("modal-mail");
const modalForm = document.getElementById("modal-form");
const newsletterUser = "Newsletter User";
console.log(modalMail);

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modalMailValue = e.target.modalMail.value;

  expReg.test(modalMailValue)
    ? sendUser(url, newsletterUser, modalMailValue)
    : (modalMail.style.borderColor = "red");
});
