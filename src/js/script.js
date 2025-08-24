const input = document.getElementById("link-input");
const inputForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    errMsg.style.display = "block";
    errMsg.innerText = "Please add a link";
    input.style.border = "2px solid hsl(0, 87%, 67%)";
  } else {
    errMsg.style.display = "none";
    input.style.border = "none";
  }
});
