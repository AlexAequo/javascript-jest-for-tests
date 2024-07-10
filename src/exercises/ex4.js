// src/exercises/ex4.js
import axios from 'axios';

// Fonction asynchrone pour récupérer les données de l'API OpenWeatherMap
export const fetchData = async () => {
  const apiKey = '1db3cf629ed34b77854175aa24be064d'; // Clé API pour OpenWeatherMap
  const city = 'Pordic'; // Ville pour laquelle nous voulons obtenir les données météo
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url); // Effectue une requête GET à l'URL spécifiée
    return response.data; // Retourne les données de la réponse de l'API
  } catch (error) {
    console.error('Error fetching data:', error); // Affiche une erreur si la requête échoue
    throw error; // Lance à nouveau l'erreur pour la gérer à un niveau supérieur si nécessaire
  }
};

// Fonction asynchrone pour afficher les données récupérées dans le DOM
export const displayData = async () => {
  try {
    const data = await fetchData(); // Appelle la fonction fetchData pour obtenir les données
    const container = document.createElement('div'); // Crée un élément <div> pour contenir les données
    container.textContent = JSON.stringify(data); // Convertit les données en chaîne JSON et les assigne au contenu textuel de la <div>
    document.body.appendChild(container); // Ajoute la <div> au corps du document HTML pour afficher les données
  } catch (error) {
    console.error('Error displaying data:', error); // Affiche une erreur si l'affichage des données échoue
  }
};

// Ajoute un écouteur d'événement pour DOMContentLoaded
if (typeof document !== 'undefined') { // Vérifie si l'environnement supporte le document (typiquement le navigateur)
  document.addEventListener('DOMContentLoaded', displayData); // Attache l'événement DOMContentLoaded à la fonction displayData
}
