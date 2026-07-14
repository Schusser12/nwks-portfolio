document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      message.textContent = "Poruka je uspješno pripremljena. Hvala na javljanju!";
      form.reset();
    });
  }
});
