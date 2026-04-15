/**
 * Objetivo: punto de entrada del programa (módulo 1).
 * Importa las utilidades de math-utils y las ejecuta con datos de ejemplo para ver el resultado en consola.
 */

import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

// Ejemplo: números grandes; la media y mediana reflejan ese conjunto; filtrarAtipicos devuelve las que están fuera de 0–10
const notas = [10, 20, 30, 40, 50];

console.log(calcularMedia(notas));
console.log(calcularMediana(notas));
console.log(filtrarAtipicos(notas));
