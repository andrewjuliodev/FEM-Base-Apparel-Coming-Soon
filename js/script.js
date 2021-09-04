/*
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly 
*/

const email = document.querySelector(".email");
const error = document.querySelector(".error");
const button = document.querySelector("button");

const emailValid = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

button.addEventListener("click", function () {
  if (email.value === "" || !emailValid(email.value)) {
    error.style.display = "inline";
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    error.style.display = "none";
    email.style.border = "1px solid hsl(0, 6%, 24%, 20%)";
  }
});
