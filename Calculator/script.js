let string = "";
let inputField = document.querySelector("input");

// Set initial placeholder value
inputField.placeholder = "0";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        inputField.value = string;
      } catch (error) {
        inputField.value = "Error";
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      inputField.value = ""; 
    } else if (e.target.innerHTML == "(" || e.target.innerHTML == ")") {
      string = string + e.target.innerHTML;
      inputField.value = string;
    } else {
      if (inputField.value === "0") {
        inputField.value = "";
      }
      string = string + e.target.innerHTML;
      inputField.value = string;
    }
  });
});
