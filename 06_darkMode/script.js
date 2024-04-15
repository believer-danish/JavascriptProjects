const darkMode = document.querySelector("#dark-mode");
const containerDarkMode = document.querySelector("#container-dark-mode");
const container = document.querySelector(".container");

if (JSON.parse(localStorage.containerMode) == true) {
  containerDarkMode.checked = true;
  container.classList.add("dark");
}

if (JSON.parse(localStorage.darkMode) == true) {
  darkMode.checked = true;
  document.body.classList.add("dark");
}

function changeDmode(e) {
  if (darkMode.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  localStorage.darkMode = localStorage.containerMode = darkMode.checked;

  containerDarkMode.checked = darkMode.checked;
  changeCmode();
}

function changeCmode() {
  if (containerDarkMode.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
  localStorage.containerMode = containerDarkMode.checked;
}

darkMode.addEventListener("change", changeDmode);
containerDarkMode.addEventListener("change", changeCmode);
