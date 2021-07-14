
// In the JavaScript file, we define a constant variable which will represent the number and operator buttons. We will then perform a query using document.querySelectorAll(). This function will allow us to get all elements that belong to the button element. We also define a display variable which will represent the input element and then perform document.querySelector().

const buttons = document.querySelectorAll("button");

const display = document.querySelector(".display");

// added eventListener to each button - function(calculate)

buttons.forEach(function(button) {

  button.addEventListener("click", calculate);

});

// function - calculate

function calculate(e) {

  // current clicked buttons value

  const clickedButtonValue = e.target.value;

  if (clickedButtonValue === "=") {

    // at first we will check whether the display is empty or not then only we will do the calculation

    if (display.value !== " ") {

      // we will calculate and show the answer to display using eval()

      display.value = eval(display.value);

    }

  } else if (clickedButtonValue === "C") {

    // it clears everything on display

    display.value = " ";

  } else {

    // 

    display.value += clickedButtonValue;

  }

}