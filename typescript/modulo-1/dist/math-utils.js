/**
 * Objetivo: módulo de utilidades estadísticas para listas de notas.
 * Expone funciones reutilizables: media, mediana y detección de valores fuera del rango típico (0–10).
 */
/** Media aritmética. Devuelve null si el array está vacío (no hay datos que promediar). */
export const calcularMedia = (notas) => {
    if (notas.length === 0) {
        return null;
    }
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
};
/**
 * Mediana: valor central una vez ordenados los datos.
 * Si hay cantidad par de elementos, es el promedio de los dos centrales.
 * Devuelve null si el array está vacío.
 */
export const calcularMediana = (notas) => {
    if (notas.length === 0) {
        return null;
    }
    const ordenadas = [...notas].sort((a, b) => a - b);
    const medio = Math.floor(ordenadas.length / 2);
    if (ordenadas.length % 2 === 0) {
        return (ordenadas[medio - 1] + ordenadas[medio]) / 2;
    }
    return ordenadas[medio];
};
/** Devuelve solo las notas atípicas: menores que 0 o mayores que 10 (fuera del rango escolar habitual). */
export const filtrarAtipicos = (notas) => {
    return notas.filter(nota => nota < 0 || nota > 10);
};
//# sourceMappingURL=math-utils.js.map