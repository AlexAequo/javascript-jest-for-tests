// ex2.js
const showMessage = () => {
  const message = document.getElementById('message');
  if (message) {
      message.textContent = 'Button clicked!';
  }
};

module.exports = { showMessage };
