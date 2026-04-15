/**
 * Objetivo: módulo de utilidades estadísticas para listas de notas.
 * Expone funciones reutilizables: media, mediana y detección de valores fuera del rango típico (0–10).
 */
/** Media aritmética. Devuelve null si el array está vacío (no hay datos que promediar). */
export declare const calcularMedia: (notas: number[]) => number | null;
/**
 * Mediana: valor central una vez ordenados los datos.
 * Si hay cantidad par de elementos, es el promedio de los dos centrales.
 * Devuelve null si el array está vacío.
 */
export declare const calcularMediana: (notas: number[]) => number | null;
/** Devuelve solo las notas atípicas: menores que 0 o mayores que 10 (fuera del rango escolar habitual). */
export declare const filtrarAtipicos: (notas: number[]) => number[];
//# sourceMappingURL=math-utils.d.ts.map