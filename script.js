
const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (e) {
    if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        calculateResult();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
