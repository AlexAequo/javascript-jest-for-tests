// src/exercises/ex4.test.js 

// Importe axios (librairie JS isomorphique) pour effectuer les requêtes HTTP et MockAdapter pour simuler les réponses d'axios
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Importe la fonction fetchData à tester depuis ex4.js
import { fetchData } from './ex4';

// Définit une suite de tests pour la fonction fetchData
describe('fetchData', () => {
  let mock; // Déclare une variable pour stocker l'instance de MockAdapter

  // Avant tous les tests, initialise MockAdapter avec axios
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  // Après chaque test, réinitialise MockAdapter
  afterEach(() => {
    mock.reset();
  });

  // Après tous les tests, restaure MockAdapter à son état initial
  afterAll(() => {
    mock.restore();
  });

  // Premier test : vérifie que fetchData récupère les données avec succès
  it('should fetch data successfully', async () => {
    // Données simulées que l'API devrait retourner
    const mockData = {
      weather: [{ description: 'clear sky' }],
      main: { temp: 293.15 },
      name: 'Pordic'
    };

    // Configure MockAdapter pour répondre avec un statut 200 et les données simulées
    const apiKey = '1db3cf629ed34b77854175aa24be064d';
    const city = 'Pordic';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    mock.onGet(url).reply(200, mockData);

    // Appelle la fonction fetchData et attend la résolution de la promesse
    const data = await fetchData();

    // Vérifie que les données retournées par fetchData contiennent les clés 'weather', 'main', et 'name'
    expect(data).toHaveProperty('weather');
    expect(data.weather[0]).toHaveProperty('description');
    expect(data).toHaveProperty('main');
    expect(data.main).toHaveProperty('temp');
    expect(data).toHaveProperty('name', 'Pordic');
  });

  // Deuxième test : vérifie que fetchData lance une erreur si la requête échoue
  it('should throw an error if the fetch fails', async () => {
    // Configure MockAdapter pour répondre avec un statut 500 (erreur serveur)
    const apiKey = '1db3cf629ed34b77854175aa24be064d';
    const city = 'Pordic';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    mock.onGet(url).reply(500);

    // Attend que fetchData lance une erreur (rejette la promesse avec un message d'erreur spécifique)
    await expect(fetchData()).rejects.toThrow('Request failed with status code 500');
  });
});
