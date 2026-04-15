/**
 * Envoltorio estándar de respuesta: éxito con datos tipados o fallo con mensaje.
 * El discriminante `ok` permite estrechar el tipo con `if (res.ok)`.
 */
export type RespuestaAPI<T> = {
    ok: true;
    datos: T;
} | {
    ok: false;
    mensaje: string;
};
/**
 * Cliente API simulado: valida el endpoint, espera con `setTimeout` y devuelve una promesa
 * fuertemente tipada (`T` describe el payload cuando `ok` es true).
 */
export declare class ApiClient {
    obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>;
}
//# sourceMappingURL=api-client.d.ts.map