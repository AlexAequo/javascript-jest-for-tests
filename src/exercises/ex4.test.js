// src/exercises/ex4.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchData } from './ex4';

describe('fetchData', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fetch data successfully', async () => {
    const mockData = {
      weather: [{ description: 'clear sky' }],
      main: { temp: 293.15 },
      name: 'Rennes'
    };

    const apiKey = '1db3cf629ed34b77854175aa24be064d';
    const city = 'Rennes';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    mock.onGet(url).reply(200, mockData);

    const data = await fetchData();

    expect(data).toHaveProperty('weather');
    expect(data.weather[0]).toHaveProperty('description');
    expect(data).toHaveProperty('main');
    expect(data.main).toHaveProperty('temp');
    expect(data).toHaveProperty('name', 'Rennes');
  });

  it('should throw an error if the fetch fails', async () => {
    const apiKey = '1db3cf629ed34b77854175aa24be064d';
    const city = 'Rennes';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    mock.onGet(url).reply(500);

    await expect(fetchData()).rejects.toThrow('Request failed with status code 500');
  });
});
