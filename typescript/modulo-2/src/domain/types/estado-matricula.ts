import type { Asignatura } from './asignatura.js';

/** Matrícula en curso: lista de asignaturas cursadas. */
export interface MatriculaActiva {
    tipo: 'ACTIVA';
    asignaturas: Asignatura[];
}

/** Matrícula pausada por incidencia o sanción. */
export interface MatriculaSuspendida {
    tipo: 'SUSPENDIDA';
    motivo: string;
}

/** Matrícula cerrada con calificación global. */
export interface MatriculaFinalizada {
    tipo: 'FINALIZADA';
    notaMedia: number;
}

/** Unión discriminada estricta: el tipo de matrícula determina qué campos existen. */
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

/**
 * Genera un texto descriptivo según el estado de la matrícula (Módulo 3 lo refinará).
 */
export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case 'ACTIVA': {
            const n = estado.asignaturas.length;
            const nombres = estado.asignaturas.map((a) => a.nombre).join(', ');
            return `Matrícula ACTIVA: ${n} asignatura(s)${nombres ? ` (${nombres})` : ''}.`;
        }
        case 'SUSPENDIDA':
            return `Matrícula SUSPENDIDA. Motivo: ${estado.motivo}`;
        case 'FINALIZADA':
            return `Matrícula FINALIZADA. Nota media: ${estado.notaMedia}.`;
        default: {
            const exhaustivo: never = estado;
            return exhaustivo;
        }
    }
}
