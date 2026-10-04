flatpickr("#birthdate", {
    dateFormat: "d/m/Y",
    maxDate: "today"
});

const form = document.getElementById("age-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdateValue = document.getElementById("birthdate").value;

    if (!birthdateValue) {
        result.textContent = "Please select a valid birth date.";
        return;
    }

    const birthDate = luxon.DateTime.fromFormat(birthdateValue, "d/M/yyyy");
    const now = luxon.DateTime.now();
    const age = now.diff(birthDate, ["years", "months", "days"]);

    const years = Math.floor(age.years);
    const months = Math.floor(age.months);

    result.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
});