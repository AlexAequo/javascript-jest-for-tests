// src/exercises/ex6.js

// Fonction pour trouver la valeur maximale dans un tableau de nombres
export function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input should be a non-empty array');
    }
    return Math.max(...arr);
  }
  
  // Fonction pour supprimer les doublons d'un tableau
  export function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array');
    }
    return [...new Set(arr)];
  }
  
  // Fonction pour vérifier si une valeur spécifique est présente dans un tableau
  export function includesValue(arr, value) {
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array');
    }
    return arr.includes(value);
  }
  
  // Fonction pour trier un tableau de nombres par ordre croissant
  export function sortArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array');
    }
    return arr.slice().sort((a, b) => a - b);
  }
  