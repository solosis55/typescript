/**
 * Envoltorio estándar de respuesta: éxito con datos tipados o fallo con mensaje.
 * El discriminante `ok` permite estrechar el tipo con `if (res.ok)`.
 */
export type RespuestaAPI<T> =
    | { ok: true; datos: T }
    | { ok: false; mensaje: string };

const RETRASO_MS = 350;

/** Simula latencia de red o base de datos. */
function esperar(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/** Datos de prueba: en un proyecto real vendrían del servidor. */
const RECURSOS_MOCK: Record<string, unknown> = {
    '/estudiantes/1': {
        id: '1',
        nombre: 'Ana',
        apellidos: 'López',
        email: 'ana@uni.edu',
        fechaMatricula: '2025-09-01',
    },
};

/**
 * Cliente API simulado: valida el endpoint, espera con `setTimeout` y devuelve una promesa
 * fuertemente tipada (`T` describe el payload cuando `ok` es true).
 */
export class ApiClient {
    async obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
        const ruta = endpoint.trim();

        if (ruta.length === 0) {
            return { ok: false, mensaje: 'El endpoint no puede estar vacío.' };
        }

        if (!ruta.startsWith('/')) {
            return { ok: false, mensaje: 'El endpoint debe comenzar con "/".' };
        }

        await esperar(RETRASO_MS);

        if (!(ruta in RECURSOS_MOCK)) {
            return {
                ok: false,
                mensaje: `No hay datos simulados para "${ruta}" (404).`,
            };
        }

        return { ok: true, datos: RECURSOS_MOCK[ruta] as T };
    }
}
