let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}

function appendFunction(func) {
  display.value += func;
}

function closeParenthesis() {
  display.value += ")";
}

function addToHistory(entry) {
  let historyList = document.getElementById("historyList");
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "%") {
    percentage();
  }
});
