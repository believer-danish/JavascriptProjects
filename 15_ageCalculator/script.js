const arrowBtn = document.querySelector(".arrow");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const outputDay = document.querySelector(".output-day span");
const outputMonth = document.querySelector(".output-month span");
const outputYear = document.querySelector(".output-year span");
const dayLabel = document.querySelector(".day-label");
const dayError = document.querySelector(".day-error");
const monthLabel = document.querySelector(".month-label");
const monthError = document.querySelector(".month-error");
const yearLabel = document.querySelector(".year-label");
const yearError = document.querySelector(".year-error");
const userDate = new Date();

arrowBtn.addEventListener("click", () => {
   
  if ((inputDay.value < 32) && (inputMonth.value < 13) && (inputYear.value <= userDate.getFullYear())) {
    outputDay.innerText = inputDay.value;
    outputMonth.innerText = inputMonth.value;
    outputYear.innerText = inputYear.value;
  }
});

inputDay.addEventListener("input", (e) => {
  if (e.target.value > 31) {
    dayLabel.classList.add("error");
    dayError.classList.add("error");
  } else {
    dayLabel.classList.remove("error");
    dayError.classList.remove("error");
  }
});

inputMonth.addEventListener("input", (e) => {
  if (e.target.value > 12) {
    monthLabel.classList.add("error");
    monthError.classList.add("error");
  } else {
    monthLabel.classList.remove("error");
    monthError.classList.remove("error");
  }
});
inputYear.addEventListener("input", (e) => {
  if (e.target.value > userDate.getFullYear()) {
    yearLabel.classList.add("error");
    yearError.classList.add("error");
  } else {
    yearError.classList.remove("error");
    yearLabel.classList.remove("error");
  }
});
