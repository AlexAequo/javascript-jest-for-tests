/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { addClassToElement } = require('./ex1'); // Mise à jour du chemin pour refléter le bon fichier

// Lire le fichier HTML dans une chaîne
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('addClassToElement', () => {
  beforeEach(() => {
    // Configurer notre corps de document
    document.documentElement.innerHTML = html.toString();
  });

  test('should add new-class to element when button is clicked', () => {
    const button = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    button.addEventListener('click', addClassToElement);

    // Simuler le clic sur le bouton
    button.click();

    // Vérifier si la classe est ajoutée
    expect(element.classList.contains('new-class')).toBe(true);
  });
});
