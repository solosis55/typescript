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
export declare function generarReporte(estado: EstadoMatricula): string;
//# sourceMappingURL=estado-matricula.d.ts.map