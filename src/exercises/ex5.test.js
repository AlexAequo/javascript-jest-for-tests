// src/exercises/ex5.test.js

import { hoverHandler } from './ex5';

describe('hover area interaction', () => {
  let interactionResult;

  beforeEach(() => {
    // Setup mock interactionResult
    interactionResult = {
      textContent: '',
      setTextContent: function (text) {
        this.textContent = text;
      },
    };
  });

  it('should update text content when hovering over the area', () => {
    // Simuler le survol de la zone
    hoverHandler(interactionResult, true);

    // Vérifier le texte après le survol
    expect(interactionResult.textContent).toBe('You are hovering over the area!');

    // Simuler la sortie du survol de la zone
    hoverHandler(interactionResult, false);

    // Vérifier le texte après la sortie du survol
    expect(interactionResult.textContent).toBe('Hover over the area.');
  });
});
