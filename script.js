document.addEventListener("DOMContentLoaded", () => {
  console.log("Rahim Football TCHAD est chargé.");

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
