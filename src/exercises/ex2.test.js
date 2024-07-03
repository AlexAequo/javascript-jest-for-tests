/**
 * @jest-environment jsdom
 */

describe('showMessage', () => {
    let messageParagraph;
  
    beforeEach(() => {
      // Create a mock paragraph element
      messageParagraph = document.createElement('p');
      messageParagraph.id = 'message';
  
      // Mock getElementById
      jest.spyOn(document, 'getElementById').mockReturnValue(messageParagraph);
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('should update message paragraph on button click', () => {
      // Votre implémentation de test
    });
  });
  