var inputLabel = document.getElementById("inputLabel");

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if(pushed == "=") {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if(pushed == "AC") {
        inputLabel.innerHTML = "0";
    }
    else if(pushed == "DEL") {
        inputLabel.innerHTML = inputLabel.innerHTML.slice(0, -1);
    }
    else {
        if(inputLabel.innerHTML == "0") {
            inputLabel.innerHTML = pushed;
        }
        else {
            inputLabel.innerHTML += pushed;
        }
    }
}

document.addEventListener("keydown", function (event) {
    // Check if the key pressed is a number or an operator
    // Backspace does not work...
    if (event.key.match(/[0-9\/\*\-\+\.=]|Backspace/)) {
      event.preventDefault(); // Prevent default action of keyboard input
      var buttons = document.querySelectorAll("button"); // Get all button elements
      var targetButton = Array.from(buttons).find(function (button) {
        return button.textContent === event.key; // Filter out the button with the matching text content
      });
      if (targetButton) {
        targetButton.click(); // Trigger click event on the target button
      }
    }
  });
  
  