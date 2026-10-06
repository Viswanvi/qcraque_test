// Validates the input and returns an error message, or null if valid.
function validate(amount, people, tip) {
  if (isNaN(amount) || amount <= 0) return "Please enter a bill amount greater than 0.";
  if (!Number.isInteger(people) || people < 1) return "Number of people must be a whole number of at least 1.";
  if (isNaN(tip) || tip < 0 || tip > 100) return "Tip must be between 0 and 100.";
  return null;
}

// Splits the bill (including tip) equally, rounded to 2 decimals.
function splitBill(amount, people, tip) {
  const total = amount * (1 + tip / 100);
  return Math.round((total / people) * 100) / 100;
}

function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const people = Number(document.getElementById("people").value);
  const tipRaw = document.getElementById("tip").value;
  const tip = tipRaw === "" ? 0 : parseFloat(tipRaw);

  const error = validate(amount, people, tip);
  document.getElementById("error").textContent = error || "";
  document.getElementById("result").textContent =
    error ? "" : "Each person pays ₹" + splitBill(amount, people, tip);
}
