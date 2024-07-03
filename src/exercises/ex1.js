function addClassToElement() {
  const element = document.getElementById('element');
  if (element) {
    element.classList.add('new-class');
  }
}

const addButton = document.getElementById('add-class-button');
if (addButton) {
  addButton.addEventListener('click', addClassToElement);
}

module.exports = { addClassToElement };
