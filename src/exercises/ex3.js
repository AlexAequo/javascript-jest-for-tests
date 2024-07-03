const validateEmail = require('./validateEmail');

document.addEventListener('DOMContentLoaded', function () {
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const validationMessage = document.getElementById('validation-message');

  emailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const { message, color } = validateEmail(emailInput.value);
    validationMessage.textContent = message;
    validationMessage.style.color = color;
  });
});
